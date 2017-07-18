## Functional Requirements

Functional requirements do not affect on architecture decisions directly, 
but provide an evidence of what software will do and a baseline for thinking about 
quality attributes. For *LabelThem* we have decided to use a lightweight way to capture 
functional requirements, namely by capturing [shall statements](http://epf.eclipse.org/wikis/openup/core.tech.common.extend_supp/guidances/guidelines/writing_good_requirements_48248536.html). 
Later, from those shall statements, we have derived a list of functional responsibilities, 
in order to distribute them to systems components during design iterations.

Shall Statement | Functional Responsibility
--------------- | -------------------------
The system shall present users with an image to be labeled | 1. Present an image from the specified source
The system shall allow users to draw polygons on the image | 2. Handle clicks on polygon tool button <br> 3. Handle сlicks on the image <br> 4. Save points coordinates <br> 5. Display / Invalidate graphical representation of the markup according to the coordinates of currently saved points
The system shall allow users to assign a class to the labelled object | 6. Receive data from a remote server <br> 7. Parse JSON with classes <br> 8. Display classes specified for the job <br> 9. Handle users selection of a class <br> 10. Save users selection of a class
The system shall allow users to modify points of the labelled object | 11. Handle clicks on saved points over the image <br> 12. Delete saved points <br> 13. Save points coordinates <br> 14. Invalidate graphical representation of the markup according to the coordinates of currently saved points
The system shall allow users to add parameters to the labelled object | 15. Receive data from a remote server <br> 16. Parse JSON with parameters <br> 17. Display parameters specified for the job <br> 18. Handle users selection of parameters <br> 19. Save users selection of parameters
The system shall allow user to configure the location of a dataset | 20. Configure dataset location
The system shall be able to use images from a remote dataset by accepting URL's as images sources | 21. Receive data from a remote server <br> 22. Present an image from a remote source
The system shall allow users to specify classes and parameters for a job | 23. Specify classes / parameters for a job <br> 24. Save data on the remote server
The system shall allow users to modify the scale of the image | 25. Handle clicks on increase / decrease image scale buttons <br> 26. Increase / decrease images scale <br> 27. Invalidate graphical representation of the markup according to the current scale of the image
The system shall allow users to select labeled object to modify / delete | 28. Handle the selection of the labelled object
The system shall allow users to modify class of the labeled object | 29. Delete saved users selection of a class for the labelled object <br> 30. Handle users selection of a class <br> 31. Save users selection of a class
The system shall allow users to modify parameters of the labeled object | 32. Delete saved users selection of parameters for the labelled object <br> 33. Handle users selection of parameters <br> 34. Save users selection of parameters
The system shall allow users to delete selected labeled object | 35. Delete saved points <br> 36. Invalidate graphical representation of the markup according to the coordinates of currently saved points <br> 37. Delete saved users selection of a class for the labelled object <br>  38. Delete saved users selection of parameters for the labelled object
The system shall allow users to export markup as JSON | 39. Generate a JSON with currently saved markup data (points, classes, parameters for all objects labelled on the image, markup quality, and identification data of the user who performed image markup) <br> 40. Handle requests to GET markup data from the system
The system shall allow user to modify brightness of the image | 41. Handle clicks on increase / decrease image brightness buttons <br> 42. Increase / Decrease brightness of the image
The system shall support integration with third-party classificators | 43. Convert marked-up image into third-party classificator-receivable format <br> 44. Send data to the third-party classificator <br> 45. Receive data from the third-party classificator <br> 46. Convert data received from the classificator to a format supported by the system <br> 47. Save recommended classes <br> 48. Display selection of the class suggested by a third-party classificator
The system shall allow users to markup images by contours (lines) recommendation | 49. Convert an image into recommendation method-receivable format <br> 50. Execute contours recommendation <br> 51. Convert recommendation data to a format supported by the system <br> 52. Save points coordinates <br> 53. Invalidate graphical representation of the markup according to the coordinates of currently saved points
The system shall run multiple jobs on one instance of itself | 54. Select / add / remove a job
The system shall allow users to markup areas on the image by scribbling on them | 55. Handle scribbling over the image <br> 56. Convert scribbled area into a polygon <br> 57. Save points coordinates <br> 58. Invalidate graphical representation of the markup according to the coordinates of currently saved points
The system shall check the quality of images markup | 59. Convert marked-up image into quality checker-receivable format <br> 60. Check the quality of the markup <br> 61. Save information about the quality of the image
The system shall support user authorization | 62. Register a user in the system <br> 63. Log in a user in the system <br> 64. Log out the user from the system
The system shall allow users to undo previous points addition / modification | 65. Handle clicks on the undo button <br> 66. Save actions history <br> 67. Display actions history <br> 68. Handle clicks on the records in the actions history <br> 69. Delete saved points <br> 70. Invalidate graphical representation of the markup according to the coordinates of currently saved points

After defining the scope of the system in terms of functional requirements, 
we can think about quality attributes, which will shape the architecture.

## Quality Attributes

For quality attributes, we are going to use [ISO 25010 Quality Model](http://iso25000.com/index.php/en/iso-25000-standards/iso-25010) 
as a basis for defining quality attributes.
As *LabelThem* project goals include minimization of cost of dataset preparation,
increase markup quality, providing quick on demand dataset preparation, 
and providing a universal (configurable for different jobs) tool for images markup, 
we will focus on the following quality attributes and sub-characteristics 
during the design and development of our application:
* Usability (Operability, Learnability, Accessibility, User Error Protection)
* Performance Efficiency (Time Behaviour)
* Reliability (Fault Tolerance)
* Maintainability (Testability, Modifiability, Reusability, Analyzability)
* Functional Suitability (Functional Correctness)
* Performance Efficiency (Resource Utilization)
* Portability (Installability)
* Security (Authenticity, Confidentiality)
* Compatibility (Interoperability)

[//]: # (Usability: Operability, Learnability, Accessibility, User Error Protection)
[//]: # (Performance Efficiecny: Time Behaviour)
[//]: # (Reliability: Fault Tolerance, Maturity)
[//]: # (Maintainability: Testability, Modifiability, Reusability, Analyzability)
[//]: # (Functional Suitability: Functional Correctness)
[//]: # (Performance Efficiency: Resource Utilization)
[//]: # (Portability: Installability)
[//]: # (Security: Authenticity, Confidentiality)
[//]: # (Compatibility: Interoperability)

In order to have traceability between our business goals and quality attributes, 
we analyzed the business goals of *LabelThem* project, transferring them to 
engineering objectives and mapping them on quality attributes. For each quality attribute 
we came up with quality attribute scenarios, prioritized them (first value is 
a business priority – how important this goal is from a business perspective, 
and the second one is a development priority – how critical it is to implement 
this engineering objective in relation to the whole system). After that, we came 
up with architecture tactics ([Bass, L., Clements, P. & Kazman, R., 2012. Software Architecture in Practice, 
Addison-Wesley, p.89](http://a.co/iHWvpmK)), 
which are techniques that an architect can use to achieve the required quality attributes. 

The resulting table is presented below:

<table>
    <tr>
        <th>
            Business Goal
        </th>
        <th>
            Engineering Objective
        </th>
        <th>
            Quality Attribute
        </th>
        <th>
             Quality Attribute Scenario
        </th>
        <th>
            Priority
        </th>
        <th>
            Tactics
        </th>
    </tr>
    <tr>
        <td rowspan="9">
            Reduce cost of dataset preparation
        </td>
        <td rowspan="4">
            Minimize time to markup an image
        </td>       
        <td>
            Operability
        </td>
        <td>
            Markup process must take less than 5 minutes
        </td>
        <td>
            (Must, Low)
        </td>
        <td>
            Maintain task model
        </td>
    </tr>
    <tr>     
        <td>
            User Error Protection
        </td>
        <td>
            A user can undo addition of the previous markup point in less than 5 seconds
        </td>
        <td>
            (Would, Medium)
        </td>
        <td>
            Mantain records of previous markup actions
        </td>
    </tr>
    <tr>     
        <td>
            Time Behaviour
        </td>
        <td>
            Systems webpage on which images can be labelled should opened on local host in less than 1 second
        </td>
        <td>
            (Should, Low)
        </td>
        <td>
            Improve resource efficiency
        </td>
    </tr>
    <tr>  
        <td>
            Learnability
        </td>
        <td>
            A user should understand the basic workflow of the system after acquainting with a user tutorial for 
            not more than 15 minutes 
        </td>
        <td>
            (Must, Low)
        </td>
        <td>
            Maintain task model
        </td>
    </tr>
    <tr>
        <td>
            Minimize system setup time   
        </td>       
        <td>
            Installability
        </td>
        <td>
            Procedure of the system installation should take less than 60 minutes. 
            Ideally should be improved to less than 10 minutes
        </td>
        <td>
            (Must, Low)
        </td>
        <td>
            Minimize Platform Dependencies
        </td>
    </tr>
    <tr>
        <td rowspan="3">
            Ensure that system do not lose markup data  
        </td>       
        <td rowspan="3">
            Fault Tolerance
        </td>
        <td>
            If the backend crashes because of the arriving events overload, this fault should be detected 
            in less than 60 seconds
        </td>
        <td>
            (Should, Medium)
        </td>
        <td>
            Ping/echo
        </td>
    </tr>
    <tr>
        <td>
            In case of detection of the fault of backend crashing because of the arriving events overload, 
            a notification to a user should appear in less than 10 seconds after the fault was detected
        </td>
        <td>
            (Should, Medium)
        </td>
        <td>
            Exception handling
        </td>
    </tr>
    <tr>
        <td>
            The front-end of the system should not crash in case of the fault of backend crashing because of the arriving events overload
        </td>
        <td>
            (Should, High)
        </td>
        <td>
            Removal from service
        </td>
    </tr>
    <tr>
        <td>
            Replace labor with automation by supporting integration with third-party classificators
        </td>       
        <td>
            Interoperability
        </td>
        <td>
            The system should return JSON values for all requests from third-party classificators
        </td>
        <td>
            (Would, Low)
        </td>
        <td>
           Tailor Interface
        </td>
    </tr>
    <tr>
        <td rowspan="2">
            Increase markup quality
        </td>
        <td rowspan="2">
            Support markup quality control
        </td>       
        <td>
            Functional Correctness
        </td>
        <td>
            Saved coordinates of markup points should not differ from the ones pointed out by a user more than on 5 pixels
        </td>
        <td>
            (Would, Low)
        </td>
        <td>
            -
        </td>
    </tr>
    <tr>
        <td>
            Authenticity
        </td>
        <td>
            All markup results should contain identification data of the user who performed image markup
        </td>
        <td>
            (Would, Low)
        </td>
        <td>
            Identify Actors
        </td>
    </tr>
    <tr>
        <td rowspan="2">
            Provide a universal (configurable for different jobs) tool for images markup
        </td>
        <td rowspan="2">
            Support configuration of datasets, jobs parameters and classes   
        </td>       
        <td rowspan="2">
            Modifiability
        </td>
        <td>
            A user should be able to configure classes or parameters for the job without introducing new defects 
            to the system
        </td>
        <td>
            (Would, Medium)
        </td>
        <td rowspan="2">
            Encapsulate
        </td>
    </tr>
        <td>
            A user should be able to configure classes or parameters for the job by editing data in no more than 1 file
        </td>
        <td>
            (Would, Medium)
        </td>
    </tr>    
    <tr>
        <td rowspan="7">
            Improve Innosoft company's reputation
        </td>
        <td rowspan="7">
            Increase open-source community involvement in project development
        </td>       
        <td rowspan="2">
            Testability
        </td>
        <td rowspan="2">
            Statement coverage of 80% is achieved
        </td>
        <td rowspan="2">
            (Should, Low)
        </td>
        <td>
            Abstract data sources
        </td>
    </tr>
    </tr>
        <td>
            Limit structural complexity
        </td>
    </tr>
    <tr>    
        <td rowspan="5">
            Modularity
        </td>
        <td rowspan="5">
            Modification of available tools or data collection workflow will affect no more than 4 modules
        </td>
        <td rowspan="5">
            (Would, High)
        </td>
        <td>
            Split module
        </td>
    </tr>
    <tr>
        <td>
            Increase semantic coherence
        </td>
    </tr>
    <tr>
        <td>
            Use an intermediary (Publish-subscribe)
        </td>
    </tr>
    <tr>
        <td>
            Abstract common services
        </td>
    </tr>
    <tr>
        <td>
            Defer binding (Publish-subscribe)
        </td>
    </tr>
</table>

## Constraints

### Technical Constraints

* The system should be implemented as a web-service
* JavaScript should be used on the frontend
* Python or/and JavaScript should be used on the backend
* The system should work in [Chromium Browser](http://www.chromium.org/Home) (ver. 55+)
* Systems users are supposed to have a computer mouse with at least two buttons and a "wheel"
* The system should be implemented as both a stand-alone application, 
and as a [Yandex.Toloka](https://toloka.yandex.ru/en)-hosted and integrated system

### Business Constraints

[//]: # (The system should support integration with the [Yandex.Toloka crowdsourcing system](https://toloka.yandex.ru/en)
* The system should be released before August 9, 2017