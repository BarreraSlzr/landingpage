import { createContactSubmissionsTable } from "./db/init/contact_submissions";

export async function setupDatabase() {
    console.log('Starting database setup...');

    try {
        await Promise.all([
            createContactSubmissionsTable()
        ]);
        console.log('Database setup completed successfully.');
    } catch (error) {
        console.error('Error during database setup:', error);
        throw error;
    }
}


export async function register() {
    setupDatabase()
}