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
import java.util.List;
import java.util.Set;
import org.slf4j.Logger;

import org.apache.commons.lang.StringUtils;
import org.geoserver.security.GeoServerUserGroupService;
import org.geoserver.security.GeoServerUserGroupStore;
import org.geoserver.security.config.SecurityNamedServiceConfig;
import org.geoserver.security.impl.AbstractUserGroupService;
import org.geoserver.security.impl.GeoServerUser;
import org.geoserver.security.iride.config.IrideUserGroupServiceConfig;
import org.geoserver.security.iride.entity.IrideApplication;
import org.geoserver.security.iride.entity.IrideIdentity;
import org.geoserver.security.iride.entity.IrideInfoPersona;
import org.geoserver.security.iride.entity.IrideUseCase;
import org.geoserver.security.iride.service.IrideService;
import org.geoserver.security.iride.service.IrideServiceAware;
import org.geoserver.security.iride.util.logging.LoggerProvider;

import com.google.common.base.Preconditions;
import com.google.common.collect.Sets;

/**
 * <code>GeoServer</code> <code>IRIDE</code> <a href="http://docs.geoserver.org/stable/en/user/security/usergrouprole/usergroupservices.html">User/Group Service</a>,
 * backed by <a href="http://www.csipiemonte.it/">CSI</a> <code>IRIDE</code> service.
 * <p><code>IRIDE</code> User/Group Service is <em>read-only</em>, therefore <em>there is no support for {@link GeoServerUserGroupStore} usage</em>:
 * {@link #canCreateStore()} will return {@code false} and {@link #createStore()} will return {@code null}.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public class IrideUserGroupService extends AbstractUserGroupService implements GeoServerUserGroupService, IrideServiceAware {

    /**
     * Logger.
     */
    private static final Logger LOGGER = LoggerProvider.SECURITY.getLogger();

    /**
     * {@link IrideUserGroupService} configuration object.
     */
    private Config config;

    /**
     * <code>IRIDE</code> service "policies" enforcer instance.
     */
    private IrideService irideService;

    /**
     * @return the irideService
     */
    @Override
    public IrideService getIrideService() {
        return this.irideService;
    }

    /**
     * @param irideService the irideService to set
     */
    @Override
    public void setIrideService(IrideService irideService) {
        this.irideService = irideService;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.impl.AbstractGeoServerSecurityService#initializeFromConfig(org.geoserver.security.config.SecurityNamedServiceConfig)
     */
    @Override
    public void initializeFromConfig(SecurityNamedServiceConfig config) throws IOException {
        LOGGER.debug("Initializing {} with configuration object: \n\t {}", this.getClass().getSimpleName(), config);

        this.name   = config.getName();
        this.config = new Config(config);

        this.getIrideService().initializeFromConfig(this.config.serverUrl);
    }

    /*
     *
     * (non-Javadoc)
     * @see org.geoserver.security.impl.AbstractUserGroupService#getUserByUsername(java.lang.String)
     */
    @Override
    public GeoServerUser getUserByUsername(String username) throws IOException {
        LOGGER.trace("Username: {}", username);

        final IrideIdentity irideIdentity = IrideIdentity.parseIrideIdentity(username);
        if (irideIdentity == null) {
            LOGGER.warn("Username: {} is not a formally valid IRIDE digital identity", username);

            return null;
        }

        // A formally valid IRIDE digital identity was given: collect the associated InfoPersonae, if any
        final IrideUseCase[] irideUseCases = this.getIrideService().findUseCasesForPersonaInApplication(
            irideIdentity,
            new IrideApplication(this.config.applicationName)
        );

        final Set<IrideInfoPersona> infoPersonae = Sets.newLinkedHashSet();
        List<IrideInfoPersona> infoPersonaInUseCase;
        for (final IrideUseCase irideUseCase : irideUseCases) {
            infoPersonaInUseCase = this.getIrideService().getInfoPersonaInUseCase(irideIdentity, irideUseCase);
            if (infoPersonaInUseCase != null) {
                infoPersonae.addAll(infoPersonaInUseCase);
            }
        }

        final IrideGeoServerUser user = this.createUserObject(username, null, true);
        user.setIrideIdentity(irideIdentity);
        user.setInfoPersonae(infoPersonae);

        LOGGER.trace("Retrieved IRIDE User: {}", user);

        return user;
    }

    /* (non-Javadoc)
     * @see org.geoserver.security.GeoserverUserGroupService#createUserObject(java.lang.String, java.lang.String, boolean)
     */
    @Override
    public IrideGeoServerUser createUserObject(String username, String password, boolean isEnabled) throws IOException {
       final IrideGeoServerUser user = new IrideGeoServerUser(username);
       user.setEnabled(isEnabled);
       user.setPassword(password);

       return user;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.impl.AbstractUserGroupService#deserialize()
     */
    @Override
    protected void deserialize() throws IOException {
        /* NOP */
    }

    /**
     * {@link IrideUserGroupService} configuration.
     *
     * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
     */
    private static final class Config {

        /**
         * Application name requesting <code>IRIDE</code> service.
         */
        private final String applicationName;

        /**
         * <code>IRIDE</code> service server <code>URL</code>.
         */
        private final String serverUrl;

        /**
         * Constructor.
         *
         * Initialize a {@link Config} object from a {@link SecurityNamedServiceConfig} instance.
         *
         * @param cfg a {@link SecurityNamedServiceConfig} instance
         * @throws IllegalStateException if the {@link #applicationName} is not deemed valid:
         *                               valid {@link #applicationName} must be <em>non-empty</em>,
         *                               as per {@link StringUtils#isNotBlank(String)} check rules.
         */
        Config(SecurityNamedServiceConfig cfg) {
            Preconditions.checkArgument(cfg instanceof IrideUserGroupServiceConfig, "Config object must be of IrideUserGroupServiceConfig type");

            final IrideUserGroupServiceConfig irideCfg = (IrideUserGroupServiceConfig) cfg;

            this.applicationName = irideCfg.getApplicationName();
            this.serverUrl       = irideCfg.getServerURL();

            Preconditions.checkState(StringUtils.isNotBlank(this.applicationName), "Application name must not be an empty string");
            Preconditions.checkState(StringUtils.isNotBlank(this.serverUrl), "Server URL must not be an empty string");
        }

    }

}
