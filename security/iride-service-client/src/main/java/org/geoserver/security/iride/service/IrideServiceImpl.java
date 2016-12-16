/*
 *  Simple SOAP service client for doing authentication and authorization operations using CSI-Piemonte IRIDE Service.
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
package org.geoserver.security.iride.service;

import static org.geoserver.security.iride.service.util.builder.url.IrideUrlBuilder.buildServerUrl;

import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.xml.transform.TransformerException;

import org.apache.commons.lang.StringUtils;
import org.geoserver.security.iride.entity.IrideApplication;
import org.geoserver.security.iride.entity.IrideIdentity;
import org.geoserver.security.iride.entity.IrideInfoPersona;
import org.geoserver.security.iride.entity.IrideRole;
import org.geoserver.security.iride.entity.IrideUseCase;
import org.geoserver.security.iride.service.policy.IridePolicy;
import org.geoserver.security.iride.service.policy.IridePolicyManager;
import org.geoserver.security.iride.util.logging.LoggerProvider;
import org.slf4j.Logger;

import com.google.common.base.Preconditions;
import com.google.common.collect.Maps;
/**
 * <code>IRIDE</code> service implementation.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideServiceImpl implements IrideService {

    /**
     * Logger.
     */
    private static final Logger LOGGER = LoggerProvider.POLICY.getLogger();

    /**
     * {@link IrideApplication} <code>IRIDE</code> policy request parameter.
     */
    private static final String IRIDE_APPLICATION_PARAM = "application";

    /**
     * {@link IrideIdentity} <code>IRIDE</code> policy request parameter.
     */
    private static final String IRIDE_IDENTITY_PARAM = "irideIdentity";

    /**
     * {@link IrideUseCase} <code>IRIDE</code> policy request parameter.
     */
    private static final String IRIDE_USECASE_PARAM = "useCase";

    /**
     * {@link IrideIdentity} <code>IRIDE</code> policy request parameter.
     */
    private static final String IRIDE_ROLE_PARAM = "role";

    /**
     * {@link IrideIdentity} <code>IRIDE</code> policy request parameter.
     */
    private static final String IRIDE_AUTH_USERNAME_PARAM = "username";

    /**
     * {@link IrideUseCase} <code>IRIDE</code> policy request parameter.
     */
    private static final String IRIDE_AUTH_PASSWORD_PARAM = "password";

    /**
     * Policy execution result message format.
     */
    private static final String RESULT_MESSAGE_FORMAT = "IRIDE Policy '{}' result: {}: ";

    /**
     * Policy execution error message format.
     */
    private static final String ERROR_MESSAGE_FORMAT = "{} error: {}";

    /**
     * <code>IRIDE</code> server <code>URL</code>.
     */
    private String serverURL;

    /**
     * <code>IRIDE</code> service "policies" manager.
     */
    private IridePolicyManager policyManager;

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.service.IrideService#initializeFromConfig(org.geoserver.security.config.SecurityNamedServiceConfig)
     */
    @Override
    public void initializeFromConfig(String serverUrl) throws IOException {
        Preconditions.checkArgument(StringUtils.isNotBlank(serverUrl), "Server URL must not be an empty string");

        this.serverURL = buildServerUrl(serverUrl);
        final Map<String, String> initParams = Maps.newHashMap();
        initParams.put("serverUrl", this.serverURL);

        LOGGER.trace("IRIDE Service client initialization: {}", initParams);
        
    }

    /**
     * Get the <code>IRIDE</code> service "policies" manager.
     *
     * @return the <code>IRIDE</code> service "policies" manager
     */
    public IridePolicyManager getPolicyManager() {
        return this.policyManager;
    }

    /**
     * Set the <code>IRIDE</code> service "policies" manager.
     *
     * @param policyManager the <code>IRIDE</code> service "policies" manager
     */
    public void setPolicyManager(IridePolicyManager policyManager) {
        this.policyManager = policyManager;
    }

    // === PolicyEnforcerBase interface === BEGIN =============================

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.policy.PolicyEnforcerBase#findRuoliForPersonaInApplication(org.geoserver.security.iride.entity.IrideIdentity, it.csi.iride2.policy.entity.Application)
     */
    @Override
    public IrideRole[] findRuoliForPersonaInApplication(IrideIdentity identity, IrideApplication application) {
        IrideRole[] result = new IrideRole[0];

        final IridePolicy policy = IridePolicy.FIND_RUOLI_FOR_PERSONA_IN_APPLICATION;

        final Map<String, Object> params = new HashMap<>();
        params.put(IRIDE_IDENTITY_PARAM, identity);
        params.put(IRIDE_APPLICATION_PARAM, application);

        try {
            final String policyResponse = this.handleRequest(policy, params);
            if (StringUtils.isNotBlank(policyResponse)) {
                @SuppressWarnings("unchecked")
                final List<IrideRole> policyResult = (List<IrideRole>) this.handleResponse(policy, policyResponse);

                result = policyResult.toArray(new IrideRole[policyResult.size()]);
            }
        } catch (IOException | TransformerException e) {
            LOGGER.error(ERROR_MESSAGE_FORMAT, new Object[] { policy.getServiceName(), e.getMessage(), e });
        }

        logPolicyExecutionResult(policy, result);

        return result;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.policy.PolicyEnforcerBase#findRuoliForPersonaInUseCase(org.geoserver.security.iride.entity.IrideIdentity, it.csi.iride2.policy.entity.UseCase)
     */
    @Override
    public IrideRole[] findRuoliForPersonaInUseCase(IrideIdentity identity, IrideUseCase useCase) {
        IrideRole[] result = new IrideRole[0];

        final IridePolicy policy = IridePolicy.FIND_RUOLI_FOR_PERSONA_IN_USE_CASE;

        final Map<String, Object> params = new HashMap<>();
        params.put(IRIDE_IDENTITY_PARAM, identity);
        params.put(IRIDE_USECASE_PARAM, useCase);

        try {
            final String policyResponse = this.handleRequest(policy, params);
            if (StringUtils.isNotBlank(policyResponse)) {
                @SuppressWarnings("unchecked")
                final List<IrideRole> policyResult = (List<IrideRole>) this.handleResponse(policy, policyResponse);

                result = policyResult.toArray(new IrideRole[policyResult.size()]);
            }
        } catch (IOException | TransformerException e) {
            LOGGER.error(ERROR_MESSAGE_FORMAT, new Object[] { policy.getServiceName(), e.getMessage(), e });
        }

        logPolicyExecutionResult(policy, result);

        return result;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.policy.PolicyEnforcerBase#findUseCasesForPersonaInApplication(org.geoserver.security.iride.entity.IrideIdentity, it.csi.iride2.policy.entity.Application)
     */
    @Override
    public IrideUseCase[] findUseCasesForPersonaInApplication(IrideIdentity identity, IrideApplication application) {
        IrideUseCase[] result = new IrideUseCase[0];

        final IridePolicy policy = IridePolicy.FIND_USE_CASES_FOR_PERSONA_IN_APPLICATION;

        final Map<String, Object> params = new HashMap<>();
        params.put(IRIDE_IDENTITY_PARAM, identity);
        params.put(IRIDE_APPLICATION_PARAM, application);

        try {
            final String policyResponse = this.handleRequest(policy, params);
            if (StringUtils.isNotBlank(policyResponse)) {
                @SuppressWarnings("unchecked")
                final List<IrideUseCase> policyResult = (List<IrideUseCase>) this.handleResponse(policy, policyResponse);

                result = policyResult.toArray(new IrideUseCase[policyResult.size()]);
            }
        } catch (IOException | TransformerException e) {
            LOGGER.error(ERROR_MESSAGE_FORMAT, new Object[] { policy.getServiceName(), e.getMessage(), e });
        }

        logPolicyExecutionResult(policy, result);

        return result;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.policy.PolicyEnforcerBase#identificaUserPassword(java.lang.String, java.lang.String)
     */
    @Override
    public IrideIdentity identificaUserPassword(String username, String password) {
        IrideIdentity result = null;

        final IridePolicy policy = IridePolicy.IDENTIFICA_USER_PASSWORD;

        final Map<String, Object> params = new HashMap<>();
        params.put(IRIDE_AUTH_USERNAME_PARAM, username);
        params.put(IRIDE_AUTH_PASSWORD_PARAM, password);

        try {
            final String policyResponse = this.handleRequest(policy, params);
            if (StringUtils.isNotBlank(policyResponse)) {
                result = (IrideIdentity) this.handleResponse(policy, policyResponse);
            }
        } catch (IOException | TransformerException e) {
            LOGGER.error(ERROR_MESSAGE_FORMAT, new Object[] { policy.getServiceName(), e.getMessage(), e });
        }

        logPolicyExecutionResult(policy, result);

        return result;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.policy.PolicyEnforcerBase#isIdentitaAutentica(org.geoserver.security.iride.entity.IrideIdentity)
     */
    @Override
    public Boolean isIdentitaAutentica(IrideIdentity identity) {
        Boolean result = null;

        final IridePolicy policy = IridePolicy.IS_IDENTITA_AUTENTICA;

        final Map<String, Object> params = new HashMap<>();
        params.put(IRIDE_IDENTITY_PARAM, identity);

        try {
            final String policyResponse = this.handleRequest(policy, params);
            if (StringUtils.isNotBlank(policyResponse)) {
                result = (Boolean) this.handleResponse(policy, policyResponse);
            }
        } catch (IOException | TransformerException e) {
            LOGGER.error(ERROR_MESSAGE_FORMAT, new Object[] { policy.getServiceName(), e.getMessage(), e });
        }

        logPolicyExecutionResult(policy, result);

        return result;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.policy.PolicyEnforcerBase#isPersonaAutorizzataInUseCase(org.geoserver.security.iride.entity.IrideIdentity, it.csi.iride2.policy.entity.UseCase)
     */
    @Override
    public Boolean isPersonaAutorizzataInUseCase(IrideIdentity identity, IrideUseCase useCase) {
        Boolean result = null;

        final IridePolicy policy = IridePolicy.IS_PERSONA_AUTORIZZATA_IN_USE_CASE;

        final Map<String, Object> params = new HashMap<>();
        params.put(IRIDE_IDENTITY_PARAM, identity);
        params.put(IRIDE_USECASE_PARAM, useCase);

        try {
            final String policyResponse = this.handleRequest(policy, params);
            if (StringUtils.isNotBlank(policyResponse)) {
                result = (Boolean) this.handleResponse(policy, policyResponse);
            }
        } catch (IOException | TransformerException e) {
            LOGGER.error(ERROR_MESSAGE_FORMAT, new Object[] { policy.getServiceName(), e.getMessage(), e });
        }

        logPolicyExecutionResult(policy, result);

        return result;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.policy.PolicyEnforcerBase#isPersonaInRuolo(org.geoserver.security.iride.entity.IrideIdentity, it.csi.iride2.iridefed.entity.IrideRole)
     */
    @Override
    public Boolean isPersonaInRuolo(IrideIdentity identity, IrideRole role) {
        Boolean result = null;

        final IridePolicy policy = IridePolicy.IS_PERSONA_IN_RUOLO;

        final Map<String, Object> params = new HashMap<>();
        params.put(IRIDE_IDENTITY_PARAM, identity);
        params.put(IRIDE_ROLE_PARAM, role);

        try {
            final String policyResponse = this.handleRequest(policy, params);
            if (StringUtils.isNotBlank(policyResponse)) {
                result = (Boolean) this.handleResponse(policy, policyResponse);
            }
        } catch (IOException | TransformerException e) {
            LOGGER.error(ERROR_MESSAGE_FORMAT, new Object[] { policy.getServiceName(), e.getMessage(), e });
        }

        logPolicyExecutionResult(policy, result);

        return result;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.policy.PolicyEnforcerBase#getInfoPersonaInUseCase(org.geoserver.security.iride.entity.IrideIdentity, it.csi.iride2.policy.entity.UseCase)
     */
    @SuppressWarnings("unchecked")
    @Override
    public List<IrideInfoPersona> getInfoPersonaInUseCase(IrideIdentity identity, IrideUseCase useCase) {
        List<IrideInfoPersona> result = null;

        final IridePolicy policy = IridePolicy.GET_INFO_PERSONA_IN_USE_CASE;

        final Map<String, Object> params = new HashMap<>();
        params.put(IRIDE_IDENTITY_PARAM, identity);
        params.put(IRIDE_USECASE_PARAM, useCase);

        try {
            final String policyResponse = this.handleRequest(policy, params);
            if (StringUtils.isNotBlank(policyResponse)) {
                result = (List<IrideInfoPersona>) this.handleResponse(policy, policyResponse);
            }
        } catch (IOException | TransformerException e) {
            LOGGER.error(ERROR_MESSAGE_FORMAT, new Object[] { policy.getServiceName(), e.getMessage(), e });
        }

        logPolicyExecutionResult(policy, result);

        return result;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.policy.PolicyEnforcerBase#getInfoPersonaSchema(it.csi.iride2.iridefed.entity.IrideRole)
     */
    @Override
    public String getInfoPersonaSchema(IrideRole role) {
        String result = null;

        final IridePolicy policy = IridePolicy.GET_INFO_PERSONA_SCHEMA;

        final Map<String, Object> params = new HashMap<>();
        params.put(IRIDE_ROLE_PARAM, role);

        try {
            final String policyResponse = this.handleRequest(policy, params);
            if (StringUtils.isNotBlank(policyResponse)) {
                result = (String) this.handleResponse(policy, policyResponse);
            }
        } catch (IOException | TransformerException e) {
            LOGGER.error(ERROR_MESSAGE_FORMAT, new Object[] { policy.getServiceName(), e.getMessage(), e });
        }

        logPolicyExecutionResult(policy, result);

        return result;
    }

    // === PolicyEnforcerBase interface ===   END =============================

    /**
     * Log the <code>IRIDE</code> service "policy" execution result.
     *
     * @param policy the <code>IRIDE</code> service "policy"
     * @param result the execution result
     */
    private static void logPolicyExecutionResult(IridePolicy policy, Object result) {
        LOGGER.trace(
            RESULT_MESSAGE_FORMAT,
            policy.getServiceName(),
            result instanceof Object[] ? Arrays.toString((Object[]) result) : result
        );
    }

    /**
     *
     * @param policy
     * @param serverURL
     * @param params
     * @return
     * @throws IOException
     */
    private String handleRequest(IridePolicy policy, Map<String, Object> params) throws IOException {
        return this.getPolicyManager().getPolicyRequestHandler(policy).handleRequest(this.serverURL, params);
    }

    /**
     *
     * @param policy
     * @param policyResponse
     * @return
     * @throws TransformerException
     */
    private Object handleResponse(IridePolicy policy, String policyResponse) throws TransformerException {
        return this.getPolicyManager().getPolicyResponseHandler(policy).handleResponse(policyResponse);
    }

}
