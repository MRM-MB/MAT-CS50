# MAT My Application Transfer - Manish Raj -
#### Video Demo:  <URL HERE>
#### All about MAT:
This is my final project for CS50x - 2022 -> "MAT" My Application Transfer

This app will allow a user to upload a file (check supported files 👇 below) up to 500MB. 
Once uploaded the file, the user will obtain a sharable link for certain file which can be shared via email or other similar services to a recipient, who can now use to download the transfered file.

🔐 MAT will also provide a feature to secure your transfered file with a password, which the receiver must enter to download such file.

#### Why this project ❓
The aim of this project was to create an easy way to transfer heavy files with a simple sharable link, without relying upon other cloud-based storage services whcih you can only use by creating an account. Where you would give aditional data, like you email, name, country or origin, etc. MAT will share your files without asking or storing any personal information, you just upload your file and MAT will provide you with a link, as simple as that.

#### Structure of the project
MAT was created mostly using Javascript. The fronted of this app was build using html, css and js mainly for the greeting page and to bring style to my .ejs files. For the backend I used js as the main language, I implemented Node.js for the localhost server, routing and password management. Express and Mongoodb as the database for the files that the user uploads into my web app. Embedded JavaScript Templating files where also used to build MAT to better structure with html.

#### MAT supports the following file formats:

**Video** -> MP4, GIF, GIFV, MKV, WEBM, FLV, VOB, OGG, 
OGV, DRC, MNG, AVI, WMV, YUV, RMVB, AMV, MOV, AVCHD, VIV.

**Audio** -> MP3, 3GP, AA, AAX, AIFF, ALAC, DVF, M4P, MPC, MSV, 
OGG, OGA, MOG, WEBM, CDA, PCM, WAV, AIFF, AAC, WMA, FLAC.

**Image** -> JPEG, PNG, SVG, WEBP, AVIF, BMP, ICO, TIFF.

**Programming Languages, Markup and Style sheets** -> ASPX, AXD, ASX, ASMX, ASHX, CSS, CFM, YAWS, SWF, HTML, 
HTM, XHTML, JHTML, JSP, JSPX, WSS, JS, PL, PHP, PHP4, PHP3, PHTML, PY, RB, RHTML, SHTML, XML, RSS, DB.

**Other Supported Files** -> PDF, DOC, XLS, TXT, PPT, ODT, RTF, BLEND, MA, FBX, DAE, 3DS, OBJ, FBX, USDZ, 
STL, STP, GLTF, 3MF.
