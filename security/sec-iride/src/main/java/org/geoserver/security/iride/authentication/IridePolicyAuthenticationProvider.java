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
package org.geoserver.security.iride.authentication;

import java.util.logging.Logger;

import org.geoserver.security.iride.IrideGeoServerUser;
import org.geoserver.security.iride.IrideUserGroupService;
import org.geoserver.security.iride.entity.IrideIdentity;
import org.geoserver.security.iride.service.IrideService;
import org.geoserver.security.iride.service.IrideServiceAware;
import org.geoserver.security.iride.util.logging.LoggerProvider;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.AbstractUserDetailsAuthenticationProvider;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.google.common.base.Preconditions;

/**
 * <code>GeoServer</code> <code>IRIDE</code> <a href="http://docs.geoserver.org/stable/en/user/security/auth/providers.html">Authentication provider</a>,
 * backed by <a href="http://www.csipiemonte.it/">CSI</a> <code>IRIDE</code> service.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IridePolicyAuthenticationProvider extends AbstractUserDetailsAuthenticationProvider implements IrideServiceAware {

    /**
     * Logger.
     */
    private static final Logger LOGGER = LoggerProvider.SECURITY.getLogger();

    /**
     * User-specific data loader instance.
     */
    private UserDetailsService userDetailsService;

    /**
     * <code>IRIDE</code> service "policies" enforcer instance.
     */
    private IrideService irideService;

    /**
     * Get the user-specific data loader instance.
     *
     * @param userDetailsService the user-specific data loader instance
     */
    public void setUserDetailsService(UserDetailsService userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    /**
     * Get the <code>IRIDE</code> service "policies" enforcer instance.
     *
     * @return the <code>IRIDE</code> service "policies" enforcer instance
     */
    @Override
    public IrideService getIrideService() {
        return this.irideService;
    }

    /**
     * Set the <code>IRIDE</code> service "policies" enforcer instance.
     *
     * @param irideService the <code>IRIDE</code> service "policies" enforcer instance
     */
    @Override
    public void setIrideService(IrideService irideService) {
        this.irideService = irideService;
    }

    /*
     * (non-Javadoc)
     * @see org.springframework.security.authentication.dao.AbstractUserDetailsAuthenticationProvider#doAfterPropertiesSet()
     */
    @Override
    protected void doAfterPropertiesSet() throws Exception {
        Preconditions.checkState(this.userDetailsService instanceof IrideUserGroupService, "A UserDetailsService of type IrideUserGroupService must be set");
    }

    /* (non-Javadoc)
     * @see org.springframework.security.authentication.dao.AbstractUserDetailsAuthenticationProvider#retrieveUser(java.lang.String, org.springframework.security.authentication.UsernamePasswordAuthenticationToken)
     */
    @Override
    protected UserDetails retrieveUser(String username, UsernamePasswordAuthenticationToken authentication) {
        UserDetails loadedUser = null;

        try {
            final IrideIdentity identity = this.getIrideService().identificaUserPassword(username, (String) authentication.getCredentials());

            loadedUser = this.userDetailsService.loadUserByUsername(identity.toString());
        } catch (UsernameNotFoundException notFound) {
            throw notFound;
        } catch (Exception repositoryProblem) {
            throw new AuthenticationServiceException(repositoryProblem.getMessage(), repositoryProblem);
        }

        if (loadedUser == null) {
            throw new AuthenticationServiceException("UserDetailsService returned null, which is an interface contract violation");
        }

        LOGGER.fine("Loaded IRIDE User: " + loadedUser);

        return loadedUser;
    }

    /* (non-Javadoc)
     * @see org.springframework.security.authentication.dao.AbstractUserDetailsAuthenticationProvider#additionalAuthenticationChecks(org.springframework.security.core.userdetails.UserDetails, org.springframework.security.authentication.UsernamePasswordAuthenticationToken)
     */
    @Override
    protected void additionalAuthenticationChecks(UserDetails userDetails, UsernamePasswordAuthenticationToken authentication) {
        if (authentication.getCredentials() == null) {
            LOGGER.warning("Authentication failed: no credentials provided");

            throw new BadCredentialsException(this.messages.getMessage("AbstractUserDetailsAuthenticationProvider.badCredentials", "Bad credentials"));
        }

        if (! IrideGeoServerUser.class.isInstance(userDetails)) {
            final String msg = "Authentication succeded but wrong UserDetails type, expected IrideGeoServerUser but got " + userDetails == null ? "<NULL>" : userDetails.getClass().getSimpleName();

            LOGGER.warning(msg);

            throw new AuthenticationServiceException(msg);
        }

        final IrideGeoServerUser irideGeoServerUser = (IrideGeoServerUser) userDetails;
        if (! irideGeoServerUser.hasIrideIdentity() ||
            ! irideGeoServerUser.hasInfoPersonae()) {
            final String msg = "Authentication succeded but wrong UserDetails type, expected IrideGeoServerUser with both an IrideIdentity and a Set<InfoPersona> properties defined";

            LOGGER.warning(msg);

            throw new AuthenticationServiceException(msg);
        }
    }

}
