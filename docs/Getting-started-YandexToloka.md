
# Getting-Started with LabelThem on Yandex.Toloka

## Introduction

This guide will walk you through the process of setting up and running an instance of LabelThem on Yandex Toloka crowdsourcing platform.



## Create a requester account

We will start by creating an account in Toloka. If you already have an account please skip to [configuration](#deploying-labelthem-to-yandex-toloka)

There are two types of users in Yandex Toloka - Performers and Crowdsourcers. Performers are your labor forces responsible for completing the tasks and crowdsourcers are the ones who post the tasks. Since we want to host a task we will create a crowdsourcer account.

1. Go to [Yandex Toloka](https://toloka.yandex.com/) and click on "Crowdsourcers" at the top. **NOTE:** Yandex Toloka provides a sandbox version where you are able to test and verify your projects. We suggest you start there first and the transfer your project to the production environment later. Link to [Yandex Toloka Sandbox](https://sandbox.toloka.yandex.com/).

2. Click on "Register". You can sign in if you already have a Yandex account, otherwise, click on "Create account" and complete the account registration process. After that you will be automatically taken to Toloka Sign-up page.   

3. On the Toloka sign-up page, select the account type that is relevant for you (either *individual* or *legal-entity*). **NOTE:** This choice cannot be edited later! It also defines the available ways of your account depositing.

4. Complete the rest of the fields and click "Next". You will be taken to the user-agreement. Read it through and accept.

5. Finally, you are ready to create your first application!


## Deploying LabelThem to Yandex Toloka

### Create and configure a new project in Yandex Toloka:

Now since you have an account on Toloka it is time to create the task and deploy LabelThem.

1. Click on "Create project":
[![new_prj.png](https://s9.postimg.org/sxozsj6cf/new_prj.png)](https://postimg.org/image/8qbk088uz/)

2. In the template selection view, scroll to the bottom and select Blank:
[![blank_prj.png](https://s22.postimg.org/hytu6nfqp/blank_prj.png)](https://postimg.org/image/6z8mv1pbh/)

3. Select a name for you project and add a description. **HINT:** Try adding a short guideline to make your project more user-friendly

4. Now, scroll down to the "SPECIFICATIONS" section and click on the angular brackets icon:
[![brackets.png](https://s10.postimg.org/q966j9c49/brackets.png)](https://postimg.org/image/cfhtu7jit/)

5. Paste the following code into "Input Data" field:
```javascript
{
  "image_rel": {
    "type": "string",
    "required": true
  },
  "json_params": {
    "type": "string",
    "required": true
  }
}
```

6. Paste the following code into "Output Data" field:
```javascript
{
  "result": {
    "type": "string",
    "required": true
  }
}
```


7. Scroll to the ```Task Interface``` section. Replace the contents of ```html``` field with the contents of ```main.html``` file located in ```PROJECT_ROOT\front``` folder:

**NOTE:** You can download the source files that are needed to run the system on Yandex Toloka crowdsourcing platform (`main.html`, `app.js`, and `concat.min.css`) from the ["releases" repository page](https://github.com/innosoft-pro/label-them/releases).

**NOTE:** If you want to get latest commited features and bugfixes, you can retrieve systems source code from the `develop-toloka` branch, and generate source files for Yandex.Toloka on your own. For the instructions on this process, please refer [to this guide](https://github.com/innosoft-pro/label-them/wiki/Generating-source-files-for-YandexToloka).

[![html.png](https://s28.postimg.org/6kbz4q7wt/html.png)](https://postimg.org/image/agpb0psw9/)

8. Similarly, replace the contents of ```js``` field with the contents of ```app.js``` file located in ```PROJECT_ROOT\build``` folder and the contents of ```css``` field with the contents of ```concat.min.css``` located in ```PROJECT_ROOT\build\css``` folder

9. If you click on preview, you should see something similar:
[![toloka_preview.png](https://s8.postimg.org/sljr2z98l/toloka_preview.png)](https://postimg.org/image/dcttp7fk1/)
Don't worry about empty blocks and absence of images - we will fix this later.

10. Click save at the bottom of the page

The next step is to [connect yandex disk to your project](#connect-yandex-disk)

### Connect Yandex Disk

The next step is to connect Yandex Disk where your data will be hosted.

1. Open "Profile" tab at the top of the page

2. Open "External Services Integration"

3. Click on "Connect Yandex Disk" (Need to add screenshots, I cannot do this since I have already connected). You will be taked to the confirmation window.

4. Click on "Add proxy" and fill in all necessary fields:

[![add_proxy.png](https://s12.postimg.org/leadhu799/add_proxy.png)](https://postimg.org/image/s4qur9uex/)

**Unique Name** will be used later in TSV generation, so take a note of it.

**Folder Name** - a folder with this name will be created on Yandex Disk. More specifically, this folder will be located at ```/Applications/Яндекс.Толока/Folder Name``` (```/Applications/Яндекс.Толока/LT-DataFolder``` in the example)

5. Click save and make sure that a folder with a given name was created on Yandex Disk

[![disk_folder.png](https://s17.postimg.org/an6b079xb/disk_folder.png)](https://postimg.org/image/6qsz47oxn/)

6. Upload your data to the newly created folder. Keep in mind that this folder **should not contain any subfolders**

The next step is to [add a new pool](#adding-a-pool)

### Adding a pool

1. Go to "Projects" tab

2. Select your project

3. Select "Add Pool":

[![add_pool.png](https://s7.postimg.org/nmkfz575n/add_pool.png)](https://postimg.org/image/3ryed0rxz/)

4. Here you can specify name and description for your pool and configure parameters. Key parameters are **price per task** and **time on a single task**. Leave "Training" and "Level Required" empty

[![pool_cong.png](https://s15.postimg.org/7lqp3vgor/pool_cong.png)](https://postimg.org/image/8b9hg8h87/)

5. Finally, configure Speed/Quality trade-off by dragging slider to the left (more speed) or to the right (more users)

6. Hit "Save" once you are satisfied with your settings

The next step is to [connect the data on Yandex Disk with newly created pool](#generating-a-tsv).

### Generating a TSV

TSV file is required to connect the data that you uploaded to the folder on Yandex Disk with the pool used by the task.

To generate a TSV file, we provide a script in Python (the script is tested with Python 2.7 and Python 3.5). To use the script, you need to specify the location of your data folder and the location of your JSON file with parameters. Note that each time you modify the data or modify the parameters, you will need to re-run the script and create a new pool.

**NOTE:** The scripts supports only latin letters and names.

Next, we will walk you through the process of setting up the tsv file and uploading it to Yandex Toloka.

1. To generate TSV, run the ```generate_tsv.py``` script located in ```PROJECT_ROOT\utils``` folder. To do so, in your terminal execute the following command (it assumes that you have cd'd to the PROJECT_ROOT folder and have python 2.7 or 3.5 installed):

``` python utils/generate_tsv.py -d path/to/data/folder -p path/to/json/params -i toloka-id ```

For the script to work, you need to supply a few parameters: path to the data (may be relative, must point to the folder (on your local machine) that you uploaded to Yandex Toloka. All of this folders content will be specified in a generated `.tsv` file), path to json with params (also may be relative) (the structure of the json with classes and parameters is described [on "Classes and parameters JSON description" wiki page](https://github.com/innosoft-pro/label-them/wiki/Classes-and-parameters-JSON-description)) and id of the folder that you created in Yandex Toloka. The first two params are straightforward, however, the last one is generated by connecting Yandex Disk to Toloka. If you forgot the id of your folder, navigate to [profile](https://toloka.yandex.ru/en/requester/profile) and click on External Services Integration. Find a ```Proxy list``` section and select the id that you generated:

[![toloka_id.png](https://s24.postimg.org/u4et4ofk5/toloka_id.png)](https://postimg.org/image/l9dyu5qrl/)

**Keep in mind, that don't need the whole string, only the highlighted part!**

A sample call of the script may look as follows:

```python utils/generate_tsv.py -d ../archive/ -p front/json/classesandparameters.json -i LT-Data```

This script will generate a ```tasks.tsv``` file in the folder from which it was executed.

2. Uploading the TSV. Navigate to [```Projects```](https://toloka.yandex.ru/en/requester) tab in Yandex Toloka and select your project

3. Select a pool or [create a new one](adding-a-pool)

4. In the pool viwe, click on Upload

[![ul_task_2.png](https://s4.postimg.org/gkn51slsd/ul_task_2.png)](https://postimg.org/image/qupk11bnt/)

5. In the pop-up menu select Set Manually and specify 1 task per page

[![ul_task_1.png](https://s11.postimg.org/4xiel63nn/ul_task_1.png)](https://postimg.org/image/vvcbmwoan/)

6. The task will be uploaded to Yandex Toloka. To verify that everything works, click on Preview button and make sure that you images and params are displayed correctly:

**NOTE:** you cannot add annotations while in preview mode!

[![pool_preview.png](https://s17.postimg.org/cfe90r8ov/pool_preview.png)](https://postimg.org/image/bpvgoe857/)

7. Now you are ready to run your first task! Simply click on Play button in the pool view and your task will be available to users in Yandex Toloka!

**NOTE:** Keep in mind that if a user starts a task and then abandons it without completion before running out of time, this task becomes active for that user for the remainder of the time. In case you decide to make the task unavailable (e.g. by closing an active pool), this task will still be accessible by users, who have this task as active.

8. If you want to download the results, click on "Download results" button in the upper right corner and select which field to include

Happy annotating!
