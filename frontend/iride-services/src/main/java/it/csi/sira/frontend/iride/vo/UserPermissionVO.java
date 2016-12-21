package it.csi.sira.frontend.iride.vo;

import java.io.Serializable;

public class UserPermissionVO implements Serializable{

	/**
     * <code>IRIDE</code> Roles code.
     */
    private IrideRoleVO[] roles;
    
    /**
     * <code>IRIDE</code> userIdentity.
     */
    private IrideIdentityVO userIdentity;

	public IrideRoleVO[] getRoles() {
		return roles;
	}

	public void setRoles(IrideRoleVO[] roles) {
		this.roles = roles;
	}

	public void setUserIdentity(IrideIdentityVO userIdentity) {
		this.userIdentity = userIdentity;
	}

	public IrideIdentityVO getUserIdentity() {
		return userIdentity;
	}
    
}
