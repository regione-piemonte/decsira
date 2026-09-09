/*
 *  CSI SIRA - Access Manager Security Module ("Rules Engine"), a GeoServer Secure Catalog Resource Access Manager plugin with which specify advanced rules evaluated to decide what the specified user can access.
 *  Copyright (C) 2026  Regione Piemonte (www.regione.piemonte.it)
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
package it.geosolutions.geoserver.sira.security;

import org.geoserver.platform.ExtensionPriority;
import org.geoserver.rest.DispatcherCallback;
import org.geoserver.rest.DispatcherCallbackAdapter;
import org.geoserver.security.AdminRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Makes read-only SLD service REST calls follow layer read rules instead of requiring workspace admin rights. */
public class SLDServiceAdminRequestCallback extends DispatcherCallbackAdapter implements ExtensionPriority {

    private static final String SLD_SERVICE_PACKAGE = "org.geoserver.sldservice.";

    @Override
    public void dispatched(HttpServletRequest request, HttpServletResponse response, Object handler) {
        // AdminRequestCallback flags every catalog controller call as admin request, so SecureCatalogImpl
        // hides layers of workspaces the user cannot administer, even if the SLD service only reads them
        String controller = DispatcherCallback.getControllerBean(handler).getClass().getName();
        if ("GET".equals(request.getMethod()) && controller.startsWith(SLD_SERVICE_PACKAGE)) {
            AdminRequest.abort();
        }
    }

    /** Runs after AdminRequestCallback, which has no priority and thus counts as {@link #LOWEST}. */
    @Override
    public int getPriority() {
        return LOWEST + 1;
    }
}
