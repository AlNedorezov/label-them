Sets of classes and parameters of objects labelled on an image is customizable.

While configuring the job, user of the system should should modify the JSON file with 
classes and parameters of objects labelled on images, in order to specify those classes 
and parameters he/she is interested in.

The structure of that JSON file is described below.

    {
      "classes":
      [
        "class 0",
        "class 1",
        "class 2",
        "class N"
      ],
    
      "parameters":
      [
        {
          "type": "boolean",
          "name": "is occluded"
        },
    
        {
          "type": "string",
          "name": "phone number",
          "prefix": "+7"
        },
    
        {
          "type": "select",
          "name": "select an option",
          "options":
          [
            "option 1 name",
            "option 2 name",
            "option N name"
          ]
        }
      ]
    }

On the systems GUI (as of version 0.2) users can find  configured classes and parameters 
of objects in the "Label Parameters block", which is accentuated with a red rounded rectangle 
on the image below.
![Screenshot of the system v0.2 with accentuated label parameters
 block](https://s18.postimg.org/o8lkh2u6h/system_v0.2_with_accentuated_label_parameters_bl.png)

Classes are represented by a drop-down menu.

![Screenshot of classes on GUI of the system v0.2](https://s18.postimg.org/gamk1orih/objects_classes_v0.2.png)

Unfolded drop-down menu with objects classes looks as on the image below:

![Screenshot of unfolded classes on GUI of the system
 v0.2](https://s18.postimg.org/3kmx2c8y1/objects_classes_v0.2_unfolded_menu.png)

Boolean parameters are represented by checkboxes as one on the image below:

![Screenshot of a boolean parameter on GUI of the system
   v0.2](https://s18.postimg.org/8tdcmh1zd/boolean_v0.2.png)

String parameters are represented by input blocks as one on the image below:

![Screenshot of a string parameter on GUI of the system
   v0.2](https://s18.postimg.org/4cpl1jd55/string_v0.2.png)
   
Select parameters are represented by drop-down menus as one on the image below:

![Screenshot of a select parameter on GUI of the system
   v0.2](https://s18.postimg.org/vyscm7wi1/select_v0.2.png)