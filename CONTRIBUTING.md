# Elastic Beanstalk Deployment (AWS UI)

This project is set up for Elastic Beanstalk using a Node.js environment that serves the React build via `server.js`.

## 1) Prepare the ZIP bundle

Open PowerShell **in the project root** (the folder that contains `package.json`, `server.js`, `Procfile`).

```
Compress-Archive -Path .\* -DestinationPath app.zip -Force
```

Verify the ZIP root contains:
- `package.json`
- `server.js`
- `Procfile`
- `src/`, `public/`, etc.

Important: the ZIP must contain these files at the top level, not inside another folder.

## 2) Upload ZIP to S3

1. Open S3 and upload `app.zip` to your bucket.
2. Select the `app.zip` object.
3. Click `Copy S3 URI`.

## 3) Deploy in Elastic Beanstalk (UI)

1. Open your Elastic Beanstalk environment.
2. Click `Upload and Deploy`.
3. Choose `S3` and paste the `S3 URI` for `app.zip`.
4. Deploy.

## 4) Verify

- Open the Environment URL at the top of the EB environment page.

## Common errors

`Instance deployment failed to generate a 'Procfile'...`

This means EB did not receive `package.json`, `server.js`, or `Procfile` at the ZIP root. Recreate the ZIP from the project root and redeploy.
