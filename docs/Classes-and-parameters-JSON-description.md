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

      //OPTIONAL
      "colors":
      {
        "class 0":"#468966",
        "class 1":"#FFF0A5",
        "class 2":"#FFB03B",
        "class N":"#B64926"
      },  
    
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
 block](https://user-images.githubusercontent.com/2508992/59833685-49b7ea00-934f-11e9-8344-43bc37e3c04f.png)

Classes are represented by a drop-down menu.

![Screenshot of classes on GUI of the system v0.2](https://user-images.githubusercontent.com/2508992/59833713-5f2d1400-934f-11e9-9c3f-a17a489e25d4.png)

Unfolded drop-down menu with objects classes looks as on the image below:

![Screenshot of unfolded classes on GUI of the system
 v0.2](https://user-images.githubusercontent.com/2508992/59833779-7835c500-934f-11e9-9767-e14f92de3f8d.png)

Boolean parameters are represented by checkboxes as one on the image below:

![Screenshot of a boolean parameter on GUI of the system
   v0.2](https://user-images.githubusercontent.com/2508992/59833816-8b489500-934f-11e9-9dc0-a43b98a9c0fd.png)

String parameters are represented by input blocks as one on the image below:

![Screenshot of a string parameter on GUI of the system
   v0.2](https://user-images.githubusercontent.com/2508992/59833874-a1565580-934f-11e9-8dc2-9afc0f64c278.png)
   
Select parameters are represented by drop-down menus as one on the image below:

![Screenshot of a select parameter on GUI of the system
   v0.2](https://user-images.githubusercontent.com/2508992/59833912-b8954300-934f-11e9-9e90-dfe2bf2b621c.png)

## Configuring class colors

To make annotating easier we provide the ability to specify colors for each class. To do so, create a new dict in classesandparams.json and specify a color for each class in HEX format. Note that providing colors is optional and if no colors were supplied, the default color scheme will be used. The default color scheme can be located in [color_scheme.js](link_to_color_scheme_after_merge) file. 

The example configuration is shown above and marked with OPTIONAL comment. 
