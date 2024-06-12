import { PUBLIC_BACKEND_URL } from '$env/static/public';
import { ApiClientBase } from './api';
import type { CompleteRole, Role } from './types';

export class roleApi extends ApiClientBase {
	constructor() {
		super(PUBLIC_BACKEND_URL);
	}
	public async getAllRoles(): Promise<Role[]> {
		return this.get<Role[]>('/api/roles');
	}
	public async getRole(id: string): Promise<Role> {
		return this.get<Role>(`/api/roles/${id}`);
	}

	public async getCompleteRole(id: string): Promise<CompleteRole> {
		return this.get<CompleteRole>(`/api/roles/${id}/complete`);
	}

}
