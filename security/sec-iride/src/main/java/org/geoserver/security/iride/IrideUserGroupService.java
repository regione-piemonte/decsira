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
import java.util.SortedSet;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.geoserver.security.GeoServerUserGroupService;
import org.geoserver.security.GeoServerUserGroupStore;
import org.geoserver.security.config.SecurityNamedServiceConfig;
import org.geoserver.security.impl.AbstractUserGroupService;
import org.geoserver.security.impl.GeoServerUser;
import org.geoserver.security.impl.GeoServerUserGroup;
import org.geotools.util.logging.Logging;

/**
 * <code>GeoServer</code> user group security service, backed by <code>CSI</code> <code>IRIDE</code> service.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public class IrideUserGroupService extends AbstractUserGroupService implements GeoServerUserGroupService {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logging.getLogger(IrideUserGroupService.class);

    /**
     * Constructor.
     */
    public IrideUserGroupService() {
        super();
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.impl.AbstractGeoServerSecurityService#initializeFromConfig(org.geoserver.security.config.SecurityNamedServiceConfig)
     */
    @Override
    public void initializeFromConfig(SecurityNamedServiceConfig config) throws IOException {
        LOGGER.log(Level.INFO,
            "Initializing {0} with configuration object: \n\t {1}",
            new Object[] { this.getClass().getSimpleName(), config }
        );

        this.name = config.getName();

        // TODO: check if needed and, if so, implement
        super.initializeFromConfig(config);
    }

    /**
     * <code>IRIDE</code> user group service is <em>read-only</em>, therefore there is no support for {@link GeoServerUserGroupStore}.
     */
    /*
     * (non-Javadoc)
     * @see org.geoserver.security.impl.AbstractGeoServerSecurityService#canCreateStore()
     */
    @Override
    public boolean canCreateStore() {
        return false;
    }

    /**
     * <code>IRIDE</code> user group service is <em>read-only</em>, therefore there is no support for {@link GeoServerUserGroupStore}.
     */
    /*
     * (non-Javadoc)
     * @see org.geoserver.security.impl.AbstractUserGroupService#createStore()
     */
    @Override
    public GeoServerUserGroupStore createStore() throws IOException {
        return null;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.impl.AbstractUserGroupService#getGroupByGroupname(java.lang.String)
     */
    @Override
    public GeoServerUserGroup getGroupByGroupname(String groupname) throws IOException {
        // TODO: check if needed and, if so, implement
        return super.getGroupByGroupname(groupname);
    }

    /*
     *
     * (non-Javadoc)
     * @see org.geoserver.security.impl.AbstractUserGroupService#getUserByUsername(java.lang.String)
     */
    @Override
    public GeoServerUser getUserByUsername(String username) throws IOException {
        // TODO: check if needed and, if so, implement
        return super.getUserByUsername(username);
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.impl.AbstractUserGroupService#createUserObject(java.lang.String, java.lang.String, boolean)
     */
    @Override
    public GeoServerUser createUserObject(String username, String password, boolean isEnabled) throws IOException {
        // TODO: check if needed and, if so, implement
        return super.createUserObject(username, password, isEnabled);
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.impl.AbstractUserGroupService#createGroupObject(java.lang.String, boolean)
     */
    @Override
    public GeoServerUserGroup createGroupObject(String groupname, boolean isEnabled) throws IOException {
        // TODO: check if needed and, if so, implement
        return super.createGroupObject(groupname, isEnabled);
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.impl.AbstractUserGroupService#getUsers()
     */
    @Override
    public SortedSet<GeoServerUser> getUsers() throws IOException {
        // TODO: check if needed and, if so, implement
        return super.getUsers();
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.impl.AbstractUserGroupService#getUserGroups()
     */
    @Override
    public SortedSet<GeoServerUserGroup> getUserGroups() throws IOException {
        // TODO: check if needed and, if so, implement
        return super.getUserGroups();
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.impl.AbstractUserGroupService#getUsersForGroup(org.geoserver.security.impl.GeoServerUserGroup)
     */
    @Override
    public SortedSet<GeoServerUser> getUsersForGroup(GeoServerUserGroup group) throws IOException {
        // TODO: check if needed and, if so, implement
        return super.getUsersForGroup(group);
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.impl.AbstractUserGroupService#getGroupsForUser(org.geoserver.security.impl.GeoServerUser)
     */
    @Override
    public SortedSet<GeoServerUserGroup> getGroupsForUser(GeoServerUser user) throws IOException {
        // TODO: check if needed and, if so, implement
        return super.getGroupsForUser(user);
    }

    /* (non-Javadoc)
     * @see org.geoserver.security.impl.AbstractUserGroupService#deserialize()
     */
    @Override
    protected void deserialize() throws IOException {
        /* NOP */
    }

}
