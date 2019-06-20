
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
[![new_prj.png](https://user-images.githubusercontent.com/2508992/59834045-f7c39400-934f-11e9-861e-93da926c2703.png)](https://user-images.githubusercontent.com/2508992/59834045-f7c39400-934f-11e9-861e-93da926c2703.png)

2. In the template selection view, scroll to the bottom and select Blank:
[![blank_prj.png](https://user-images.githubusercontent.com/2508992/59834088-0f028180-9350-11e9-9dd7-587187ecadcf.png)](https://user-images.githubusercontent.com/2508992/59834088-0f028180-9350-11e9-9dd7-587187ecadcf.png)

3. Select a name for you project and add a description. **HINT:** Try adding a short guideline to make your project more user-friendly

4. Now, scroll down to the "SPECIFICATIONS" section and click on the angular brackets icon:
[![brackets.png](https://user-images.githubusercontent.com/2508992/59834259-5b4dc180-9350-11e9-81f4-203b2c0b4363.png)](https://user-images.githubusercontent.com/2508992/59834259-5b4dc180-9350-11e9-81f4-203b2c0b4363.png)

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

[![html.png](https://user-images.githubusercontent.com/2508992/59834310-791b2680-9350-11e9-9b89-5655885f43a3.png)](https://user-images.githubusercontent.com/2508992/59834310-791b2680-9350-11e9-9b89-5655885f43a3.png)

8. Similarly, replace the contents of ```js``` field with the contents of ```app.js``` file located in ```PROJECT_ROOT\build``` folder and the contents of ```css``` field with the contents of ```concat.min.css``` located in ```PROJECT_ROOT\build\css``` folder

9. If you click on preview, you should see something similar:
[![toloka_preview.png](https://user-images.githubusercontent.com/2508992/59834379-994ae580-9350-11e9-907a-33fb73e79898.png)](https://user-images.githubusercontent.com/2508992/59834379-994ae580-9350-11e9-907a-33fb73e79898.png)
Don't worry about empty blocks and absence of images - we will fix this with later steps.

10. Click save at the bottom of the page

The next step is to [connect yandex disk to your project](#connect-yandex-disk)

### Connect Yandex Disk

The next step is to connect Yandex Disk where your data will be hosted.

1. Open "Profile" tab at the top of the page

2. Open "External Services Integration"

3. Click on "Connect Yandex Disk" (Need to add screenshots, I cannot do this since I have already connected). You will be taked to the confirmation window.

4. Click on "Add proxy" and fill in all necessary fields:

[![add_proxy.png](https://user-images.githubusercontent.com/2508992/59834463-b67fb400-9350-11e9-813b-4025c751e286.png)](https://user-images.githubusercontent.com/2508992/59834463-b67fb400-9350-11e9-813b-4025c751e286.png)

**Unique Name** will be used later in TSV generation, so take a note of it.

**Folder Name** - a folder with this name will be created on Yandex Disk. More specifically, this folder will be located at ```/Applications/Яндекс.Толока/Folder Name``` (```/Applications/Яндекс.Толока/LT-DataFolder``` in the example)

5. Click save and make sure that a folder with a given name was created on Yandex Disk

[![disk_folder.png](https://user-images.githubusercontent.com/2508992/59834519-cf886500-9350-11e9-8e82-dad156dfa5de.png)](https://user-images.githubusercontent.com/2508992/59834519-cf886500-9350-11e9-8e82-dad156dfa5de.png)

6. Upload your data to the newly created folder. Keep in mind that this folder **should not contain any subfolders**

The next step is to [add a new pool](#adding-a-pool)

### Adding a pool

1. Go to "Projects" tab

2. Select your project

3. Select "Add Pool":

[![add_pool.png](https://user-images.githubusercontent.com/2508992/59834588-e8911600-9350-11e9-916c-4382ab3a8cbf.png)](https://user-images.githubusercontent.com/2508992/59834588-e8911600-9350-11e9-916c-4382ab3a8cbf.png)

4. Here you can specify name and description for your pool and configure parameters. Key parameters are **price per task** and **time on a single task**. Leave "Training" and "Level Required" empty

[![pool_cong.png](https://user-images.githubusercontent.com/2508992/59834655-ff376d00-9350-11e9-93d5-cfafa6c4f1ad.png)](https://user-images.githubusercontent.com/2508992/59834655-ff376d00-9350-11e9-93d5-cfafa6c4f1ad.png)

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

[![toloka_id.png](https://user-images.githubusercontent.com/2508992/59834707-18401e00-9351-11e9-971f-c3f7b65401b3.png)](https://user-images.githubusercontent.com/2508992/59834707-18401e00-9351-11e9-971f-c3f7b65401b3.png)

**Keep in mind, that don't need the whole string, only the highlighted part!**

A sample call of the script may look as follows:

```python utils/generate_tsv.py -d ../archive/ -p front/json/classesandparameters.json -i LT-Data```

This script will generate a ```tasks.tsv``` file in the folder from which it was executed.

2. Uploading the TSV. Navigate to [```Projects```](https://toloka.yandex.ru/en/requester) tab in Yandex Toloka and select your project

3. Select a pool or [create a new one](adding-a-pool)

4. In the pool viwe, click on Upload

[![ul_task_2.png](https://user-images.githubusercontent.com/2508992/59834750-3148cf00-9351-11e9-8c3a-7edde71ea93c.png)](https://user-images.githubusercontent.com/2508992/59834750-3148cf00-9351-11e9-8c3a-7edde71ea93c.png)

5. In the pop-up menu select Set Manually and specify 1 task per page

[![ul_task_1.png](https://user-images.githubusercontent.com/2508992/59834805-4aea1680-9351-11e9-8417-1d4ed80bd0d3.png)](https://user-images.githubusercontent.com/2508992/59834805-4aea1680-9351-11e9-8417-1d4ed80bd0d3.png)

6. The task will be uploaded to Yandex Toloka. To verify that everything works, click on Preview button and make sure that you images and params are displayed correctly:

**NOTE:** you cannot add annotations while in preview mode!

[![pool_preview.png](https://user-images.githubusercontent.com/2508992/59834862-66edb800-9351-11e9-9cd6-7b84043d61c7.png)](https://user-images.githubusercontent.com/2508992/59834862-66edb800-9351-11e9-9cd6-7b84043d61c7.png)

7. Now you are ready to run your first task! Simply click on Play button in the pool view and your task will be available to users in Yandex Toloka!

**NOTE:** Keep in mind that if a user starts a task and then abandons it without completion before running out of time, this task becomes active for that user for the remainder of the time. In case you decide to make the task unavailable (e.g. by closing an active pool), this task will still be accessible by users, who have this task as active.

8. If you want to download the results, click on "Download results" button in the upper right corner and select which field to include

Happy annotating!
