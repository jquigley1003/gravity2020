
export interface DisplayName {
  firstName?: string;
  lastName?: string;
}

export interface Contact {
	email?: string;
	facebookUrl?: string;
	instagramUrl?: string;
	Phone?: string;
	twitterUrl?: string;
	websiteUrl?: string;
}
export interface Trainer extends DisplayName {
	contact?: Contact;
	description?: string;
	certifications?: Array<string>;
	degrees?: Array<string>;
	gender?: string;
	imageUrl?: string;
	showTrainer?: boolean;
}
