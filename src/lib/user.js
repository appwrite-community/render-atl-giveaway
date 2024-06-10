// @ts-nocheck
import { account } from './appwrite';
import { OAuthProvider } from 'appwrite';

export const user = {
	login: async () => {
		account.createOAuth2Session(
			OAuthProvider.Github,
			`http://localhost:5173/success`,
			`https://${window.location.hostname}/failure`
		);
	},

	get: async () => {
		return await account.get();
	},

	session: async () => {
		try {
			return await account.getSession('current');
		} catch (err) {
			return null;
		}
	}
};
