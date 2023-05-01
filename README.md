# Node Filepond API

#### Simple api for access image uploaded from filepond

#### Technologies:

* Express.js
* Prisma
* Postgresql

### How to run

* git clone  https://github.com/peterdinis/Express-Filepond-Upload-API.git
* npm i
* create your .env file with your database credential
* npx prisma migrate dev
* npm run dev

### Filepond frontend example

`<FilePond files={files}
            onupdatefiles={handleFileUpload}
            allowMultiple={false}
            acceptedFileTypes={["image/*"]}
            labelIdle="Vybrať obrázok"
            server={serverUrl}
            allowDrop={true}
            allowImagePreview={true}
            imagePreviewMaxHeight={550}
            imagePreviewMarkupShow={true}
            allowImageCrop={true}
            labelTapToUndo="Skúsiť znova"
            labelFileLoading="Nahrávam..."
            labelFileAdded="Súbor bol úspešne nahraný"  />`
