# The Sainte Foy Chalet Company

New modern API and React front end for TSFCC

### API Routes

- Properties

  - GET /properties (Fetch basic details for all properties)
  - GET /properties/:id (Fetch full property details)
  - POST /properties (Create properry for admin user)
  - PATCH /properties/:id (Edit property for admin user)
  - DELETE /properties/:id (Delete property for admin user)

- Users
  - POST /users/signup (Sign up admin user) // DELETE FOR PRODUCTION!
  - POST /users/signin (Sign in admin user)
