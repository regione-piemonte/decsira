/*
 *  GeoServer Security Provider plugin with which doing authentication and authorization operations using CSI-Piemonte IRIDE Service.
 *  Copyright (C) 2016  Regione Piemonte (www.regione.piemonte.it)
 *
 *  This program is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License along
 *  with this program; if not, write to the Free Software Foundation, Inc.,
 *  51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */
package org.geoserver.security.iride;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.geoserver.security.GeoServerAuthenticationProvider;
import org.geoserver.security.auth.UsernamePasswordAuthenticationProvider;
import org.geoserver.security.config.SecurityNamedServiceConfig;
import org.geoserver.security.impl.GeoServerRole;
import org.geoserver.security.iride.authentication.IridePolicyAuthenticationProvider;
import org.geoserver.security.iride.config.IrideAuthenticationProviderConfig;
import org.geoserver.security.iride.util.factory.security.IridePolicyAuthenticationProviderFactory;
import org.geoserver.security.iride.util.logging.LoggerProvider;
import org.slf4j.Logger;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.google.common.base.Preconditions;

/**
 * <code>GeoServer</code> <code>IRIDE</code> <a href="http://docs.geoserver.org/stable/en/user/security/auth/providers.html">Authentication provider</a>.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public class IrideAuthenticationProvider extends GeoServerAuthenticationProvider {

    /**
     * Logger.
     */
    private static final Logger LOGGER = LoggerProvider.SECURITY.getLogger();

    /**
     * Factory that creates a new, configured, {@link IridePolicyAuthenticationProviderFactory} instance.
     */
    private IridePolicyAuthenticationProviderFactory delegateAuthProviderFactory;

    /**
     * Delegate Authentication provider.
     */
    private IridePolicyAuthenticationProvider delegateAuthProvider;

    /**
     * {@link IrideAuthenticationProvider} configuration object.
     */
    private Config config;

    /**
     * Get the factory that creates a new, configured, {@link IridePolicyAuthenticationProviderFactory} instance.
     *
     * @return the factory that creates a new, configured, {@link IridePolicyAuthenticationProviderFactory} instance
     */
    public IridePolicyAuthenticationProviderFactory getDelegateAuthProviderFactory() {
        return this.delegateAuthProviderFactory;
    }

    /**
     * Set the factory that creates a new, configured, {@link IridePolicyAuthenticationProviderFactory} instance.
     *
     * @param delegateAuthProviderFactory the factory that creates a new, configured, {@link IridePolicyAuthenticationProviderFactory} instance
     */
    public void setDelegateAuthProviderFactory(IridePolicyAuthenticationProviderFactory delegateAuthProviderFactory) {
        this.delegateAuthProviderFactory = delegateAuthProviderFactory;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.impl.AbstractGeoServerSecurityService#initializeFromConfig(org.geoserver.security.config.SecurityNamedServiceConfig)
     */
    @Override
    public void initializeFromConfig(SecurityNamedServiceConfig config) throws IOException {
        LOGGER.debug("Initializing {} with configuration object: \n\t {}", this.getClass().getSimpleName(), config);

        this.config = new Config(config);

        this.delegateAuthProviderFactory.setUserGroupServiceName(this.config.userGroupServiceName);

        try {
            this.delegateAuthProvider = this.delegateAuthProviderFactory.create();
            this.delegateAuthProvider.afterPropertiesSet();
        } catch (Exception e) {
            throw new IOException(e);
        }
    }

    /* (non-Javadoc)
     * @see org.geoserver.security.GeoServerAuthenticationProvider#supports(java.lang.Class, javax.servlet.http.HttpServletRequest)
     */
    @Override
    public boolean supports(Class<? extends Object> authentication, HttpServletRequest request) {
        return this.delegateAuthProvider.supports(authentication);
    }

    /* (non-Javadoc)
     * @see org.geoserver.security.GeoServerAuthenticationProvider#authenticate(org.springframework.security.core.Authentication, javax.servlet.http.HttpServletRequest)
     */
    @Override
    public Authentication authenticate(Authentication authentication, HttpServletRequest request) {
        UsernamePasswordAuthenticationToken auth = null;
        try {
            // the authentication token credentials have been already removed by the delegate authentication provider
            auth = (UsernamePasswordAuthenticationToken) this.delegateAuthProvider.authenticate(authentication);
        } catch (UsernameNotFoundException | BadCredentialsException | DisabledException e) {
            LOGGER.trace(e.getMessage(), e);
        } catch (AuthenticationException e) {
            LOGGER.warn(e.getMessage(), e);
        }

        final Authentication authToken = this.buildAuthenticationToken(auth);

        LOGGER.trace("Authentication Token: {}", authToken);

        return authToken;
    }

    /**
     * Returns the {@link UsernamePasswordAuthenticationToken} token.
     *
     * @param auth the {@link UsernamePasswordAuthenticationToken} token
     * @return the {@link UsernamePasswordAuthenticationToken} token
     * @see UsernamePasswordAuthenticationProvider#authenticate(Authentication, HttpServletRequest)
     */
    private UsernamePasswordAuthenticationToken buildAuthenticationToken(UsernamePasswordAuthenticationToken auth) {
        if (auth == null) {
            // pass request to next provider in the chain
            return null;
        }

        if (! auth.getAuthorities().contains(GeoServerRole.AUTHENTICATED_ROLE)) {
            final List<GrantedAuthority> roles = new ArrayList<>();
            roles.addAll(auth.getAuthorities());
            roles.add(GeoServerRole.AUTHENTICATED_ROLE);

            final UsernamePasswordAuthenticationToken newAuth = new UsernamePasswordAuthenticationToken(
                auth.getPrincipal(), auth.getCredentials(), roles
            );
            newAuth.setDetails(auth.getDetails());

            return newAuth;
        }

        return auth;
    }

    /**
     * {@link IrideAuthenticationProvider} configuration.
     *
     * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
     */
    private static final class Config {

        /**
         * Application name requesting <code>IRIDE</code> service.
         */
        private final String applicationName;

        /**
         * User/Group Service name.
         */
        private String userGroupServiceName;

        /**
         * Constructor.
         *
         * Initialize a {@link Config} object from a {@link SecurityNamedServiceConfig} instance.
         *
         * @param cfg a {@link SecurityNamedServiceConfig} instance
         * @throws IllegalStateException if the {@link #userGroupServiceName} is not deemed valid:
         *                               valid {@link #userGroupServiceName} must be <em>non-empty</em>,
         *                               as per {@link StringUtils#isNotBlank(String)} check rules.
         */
        Config(SecurityNamedServiceConfig cfg) {
            Preconditions.checkArgument(cfg instanceof IrideAuthenticationProviderConfig, "Config object must be of IrideAuthenticationProviderConfig type");

            final IrideAuthenticationProviderConfig irideCfg = (IrideAuthenticationProviderConfig) cfg;

            this.applicationName      = irideCfg.getApplicationName();
            this.userGroupServiceName = irideCfg.getUserGroupServiceName();

            Preconditions.checkState(StringUtils.isNotBlank(this.applicationName), "Application name must not be an empty string");
            Preconditions.checkState(StringUtils.isNotBlank(this.userGroupServiceName), "User/Group Service name must not be an empty string");
        }

    }

}
