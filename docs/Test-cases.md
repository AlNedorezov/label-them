This page contains step-by-step descriptions of tests that check systems performance and compliance to the requirements. 

Test cases include:

[Case 1: Labelling Process](#case-1)  
[Case 2: Automated saving of results (Case 1 without clicking on save button)](#case-2)  
[Case 3: Polygons selection and modification of classes and parameters of the selected polygon](#case-3)  
[Case 4: Undoing points addition during objects markup](#case-4)  
[Case 5: Redoing the addition of the cancelled point from the objects markup](#case-5)  
[Case 6: Deletion of selected polygons](#case-6)  
[Case 7: Cancelling the markup of the current object](#case-7)  
[Case 8: Image brightness increase on clicking btn_brightness_high button](#case-8)  
[Case 9: Image brightness decrease on clicking btn_brightness_low button](#case-9)  
[Case 10: Image scaling](#case-10)  
[Case 11: History](#case-11)  
[Case 12: Switching between languages](#case-12)

### Case 1
**Labeling Process**

0. Polygon tool is selected by default  
1. Label {(100, 100), (100, 200), (200, 100)} polygon.  
1.1. left click on the 100, 100 pixel of the image  
1.2. left click on the 100, 200 pixel of the image  
1.3. left click on the 200, 100 pixel of the image  
1.4. left click on the 100, 100 pixel of the image  
2. Select object class “class 0”  
3. Check “is occluded” boolean parameter  
4. Click save button  
5. Compare returned JSON markup to `[{\"points\":[[100,100],[100,200],[200,100]],\"parameters\":{\"class\":\"class 0\",\"is occluded\":true}}]`

### Case 2
**Automated saving of results (Case 1 without clicking on save button)**

0. Polygon tool is selected by default  
1. Label {(100, 100), (100, 200), (200, 100)} polygon.  
1.1. left click on the 100, 100 pixel of the image  
1.2. left click on the 100, 200 pixel of the image  
1.3. left click on the 200, 100 pixel of the image  
1.4. left click on the 100, 100 pixel of the image  
2. Select object class “class 0”  
3. Check “is occluded” boolean parameter  
4. Compare returned JSON markup to `[{\"points\":[[100,100],[100,200],[200,100]],\"parameters\":{\"class\":\"class 0\",\"is occluded\":true}}]`

### Case 3
**Polygons selection and modification of classes and parameters of the selected polygon**

0. Polygon tool is selected by default  
1. Label {(100, 100), (100, 200), (200, 100)} polygon.  
1.1. left click on the 100, 100 pixel of the image  
1.2. left click on the 100, 200 pixel of the image  
1.3. left click on the 200, 100 pixel of the image  
1.4. left click on the 100, 100 pixel of the image  
2. Select object class “class 0”  
3. Check “is occluded” boolean parameter  
4. Label {(300, 300), (300, 400), (400, 300)} polygon.  
4.1. left click on the 300, 300 pixel of the image  
4.2. left click on the 300, 400 pixel of the image  
4.3. left click on the 400, 300 pixel of the image  
4.4. left click on the 300, 300 pixel of the image  
5. Select object class “class 1”  
6. Make sure “is occluded” boolean parameter is NOT checked  
7. Select “Hand” tool  
8. Left click on the image on (120, 120) point  
9. Uncheck “is occluded” boolean parameter  
10. Left click on the image on (320, 320) point  
11. Change object class selection from ”class 1” to “class 0”  
12. Check “is occluded” boolean parameter  
13. Click save button  
14. Compare returned JSON markup to `[{\"points\":[[100,100],[100,200],[200,100]],\"parameters\":{\"class\":\"class 0\",\"is occluded\":false}}, {\"points\":[[300,300],[300,400],[400,300]],\"parameters\":{\"class\":\"class 0\",\"is occluded\":true}}]`

### Case 4
**Undoing points addition during objects markup**

0. Polygon tool is selected by default  
1. Label {(100, 100), (100, 200), (200, 100), (200, 200), (150, 150)} points.  
1.1. left click on the 100, 100 pixel of the image  
1.2. left click on the 100, 200 pixel of the image  
1.3. left click on the 200, 100 pixel of the image  
1.4. left click on the 200, 200 pixel of the image  
1.5. left click on the 150, 150 pixel of the image  
2. Click [ctrl] + [z] // Undo addition of the latest point  
3. Click [ctrl] + [z] // Undo addition of the latest point  
4. left click on the 100, 100 pixel of the image  
5. Click save button
6. Compare returned JSON markup to `[{\"points\":[[100,100],[100,200],[200,100]],\"parameters\":{}}]`

### Case 5
**Redoing the addition of the cancelled point from the objects markup**

0. Polygon tool is selected by default  
1. Label {(100, 100), (100, 200), (200, 100), (200, 200), (150, 150)} points.  
1.1. left click on the 100, 100 pixel of the image  
1.2. left click on the 100, 200 pixel of the image  
1.3. left click on the 200, 100 pixel of the image  
1.4. left click on the 200, 200 pixel of the image  
1.5. left click on the 150, 150 pixel of the image  
2. Click [Ctrl] + [z] // Undo addition of the latest point  
3. Click [Ctrl] + [z] // Undo addition of the latest point  
4. Click [Ctrl] + [Shift] + [z] // Redo the addition of the latest cancelled point  
5. left click on the 100, 100 pixel of the image  
6. Click save button  
7. Compare returned JSON markup to `[{\"points\":[[100,100],[100,200],[200,100],[200,200]],\"parameters\":{}}]`

### Case 6
**Deletion of selected polygons**

0. Polygon tool is selected by default  
1. Label {(100, 100), (100, 200), (200, 100)} polygon.  
1.1. left click on the 100, 100 pixel of the image  
1.2. left click on the 100, 200 pixel of the image  
1.3. left click on the 200, 100 pixel of the image  
1.4. left click on the 100, 100 pixel of the image  
2. Select object class “class 0”  
3. Check “is occluded” boolean parameter  
4. Label {(300, 300), (300, 400), (400, 300)} polygon.  
4.1. left click on the 300, 300 pixel of the image  
4.2. left click on the 300, 400 pixel of the image  
4.3. left click on the 400, 300 pixel of the image  
4.4. left click on the 300, 300 pixel of the image  
5. Select object class “class 1”  
6. Make sure “is occluded” boolean parameter is NOT checked  
7. Label {(50, 50), (50, 75), (75, 50)} polygon.  
7.1. left click on the 50, 50 pixel of the image  
7.2. left click on the 50, 75 pixel of the image  
7.3. left click on the 75, 50 pixel of the image  
7.4. left click on the 50, 50 pixel of the image  
8. Select object class “class 1”  
9. Check “is occluded” boolean parameter  
10. Select “Hand” tool  
11. Left click on the image on (320, 320) point  
12. Click [Delete] button  
11. Left click on the image on (55, 55) point  
12. Click [Backspace] button  
13. Click save button  
14. Compare returned JSON markup to `[{\"points\":[[100,100],[100,200],[200,100]],\"parameters\":{\"class\":\"class 0\",\"is occluded\":true}}]`

### Case 7
**Cancelling the markup of the current object**

0. Polygon tool is selected by default  
1. Label {(100, 100), (100, 200), (200, 100)} polygon.  
1.1. left click on the 100, 100 pixel of the image  
1.2. left click on the 100, 200 pixel of the image  
1.3. left click on the 200, 100 pixel of the image  
1.4. left click on the 100, 100 pixel of the image  
2. Label {(300, 300), (300, 400), (400, 300)} points.  
2.1. left click on the 300, 300 pixel of the image  
2.2. left click on the 300, 400 pixel of the image  
2.3. left click on the 400, 300 pixel of the image  
3. Perform a right-click (right mouse click)  
4. Label {(50, 50), (50, 75), (75, 50)} polygon.  
7.1. left click on the 50, 50 pixel of the image  
7.2. left click on the 50, 75 pixel of the image  
7.3. left click on the 75, 50 pixel of the image  
7.4. left click on the 50, 50 pixel of the image  
13. Click save button  
14. Compare returned JSON markup to `[{\"points\".[[100,100],[100,200],[200,100]],\"parameters\":{}},{\"points\":[[50,50],[50,75],[75,50]],\"parameters\":{}}]`

### Case 8
**Image brightness increase on clicking btn_brightness_high button**

1. Measure initial brightness of the image and save it’s value  
2. Click brightness_high button  
3. Measure current brightness of the image once again and save it’s value  
4. Compare initial brightness value to the current one (check that current brightness value is higher than the initial one)

### Case 9
**Image brightness decrease on clicking btn_brightness_low button**

1. Measure initial brightness of the image and save it’s value  
2. Click brightness_low button  
3. Measure current brightness of the image once again and save it’s value  
4. Compare initial brightness value to the current one (check that current brightness value is lower than the initial one)

### Case 10
**Image scaling**

0. Polygon tool is selected by default  
1. Save width and height of #main-canvas and #svg_img blocks  
2. Label {(65, 65), (65, 85), (85, 85), (85, 65)}.  
2.1. left click on the 65, 65 pixel of the image  
2.2. left click on the 65, 85 pixel of the image  
2.3. left click on the 85, 85 pixel of the image  
2.4. left click on the 85, 65 pixel of the image  
2.5. left click on the 65, 65 pixel of the image  
3. Click btn_zoom_out button  
4. Check that current width and height of #main-canvas and #svg_img blocks are equal to their saved values  
5. Click btn_zoom_in button  
6. Check that current width and height of #main-canvas and #svg_img blocks are doubles of their saved values  
7. Label {(60, 60), (60, 90), (90, 90), (90, 60)} polygon.  
7.1. left click on the 120, 120 pixel of the image // as image is low scaled to 2x  
7.2. left click on the 120, 180 pixel of the image // as image is low scaled to 2x  
7.3. left click on the 180, 180 pixel of the image // as image is low scaled to 2x  
7.4. left click on the 180, 120 pixel of the image // as image is low scaled to 2x  
7.5. left click on the 120, 120 pixel of the image // as image is low scaled to 2x  
8. Click btn_zoom_in button  
9. Check that current width and height of #main-canvas and #svg_img blocks are equal to their saved values multiplied by 4  
10. Label {(55, 55), (55, 95), (95, 95), (95, 55)} polygon.  
10.1. left click on the 220, 220 pixel of the image // as image is low scaled to 4x  
10.2. left click on the 220, 380 pixel of the image // as image is low scaled to 4x  
10.3. left click on the 380, 380 pixel of the image // as image is low scaled to 4x  
10.4. left click on the 380, 220 pixel of the image // as image is low scaled to 4x  
10.5. left click on the 220, 220 pixel of the image // as image is low scaled to 4x  
11. Click btn_zoom_out button  
12. Check that current width and height of #main-canvas and #svg_img blocks are doubles of their saved values  
13. Label {(50, 50), (50, 100), (50, 100), (100, 50)} polygon.  
13.1. left click on the 100, 100 pixel of the image // as image is low scaled to 2x  
13.2. left click on the 100, 200 pixel of the image // as image is low scaled to 2x  
13.3. left click on the 200, 200 pixel of the image // as image is low scaled to 2x  
13.4. left click on the 200, 100 pixel of the image // as image is low scaled to 2x  
13.5. left click on the 100, 100 pixel of the image // as image is low scaled to 2x  
14. Click btn_zoom_out button  
15. Check that current width and height of #main-canvas and #svg_img blocks are equal to their saved values  
16. Click save button  
17. Compare returned JSON markup to `[{\"points\":[[65,65],[65,85],[85,85],[85,65]],\"parameters\":{}},{\"points\":[[60,60],[60,90],[90,90],[90,60]],\"parameters\":{}},{\"points\":[[55,95],[55,95],[95,95],[95,55]],\"parameters\":{}},{\"points\":[[50,50],[50,100],[100,100],[100,50]],\"parameters\":{}}]`

### Case 11
**History**

0. Polygon tool is selected by default  
1. Check that historyRow0 DOM element does not exist  
2. Label {(100, 100), (100, 200), (200, 100)} polygon.  
2.1. left click on the 100, 100 pixel of the image  
2.2. left click on the 100, 200 pixel of the image  
2.3. left click on the 200, 100 pixel of the image  
2.4. left click on the 100, 100 pixel of the image  
3. Check that historyRow0 DOM element exists and contains a string “Polygon was added and assigned an id 0”  
4. Select object class “class 0”  
5. Check that historyRow1 DOM element exists and contains a string “Class of polygon 0 was changed to class 0”  
6. Check “is occluded” boolean parameter  
7. Check that historyRow2 DOM element exists and contains a string “Parameter is occluded of polygon 0 was changed to true”  
8. Select “option 1 name” option of “select an option” select parameter  
9. Check that historyRow3 DOM element exists and contains a string “Parameter select an option of polygon 0 was changed to option 1 name”  
10. Label {(300, 300), (300, 400), (400, 300)} polygon.  
10.1. left click on the 300, 300 pixel of the image  
10.2. left click on the 300, 400 pixel of the image  
10.3. left click on the 400, 300 pixel of the image  
10.4. left click on the 300, 300 pixel of the image  
11. Check that historyRow4 DOM element exists and contains a string “Polygon was added and assigned an id 1”  
12. Select “Hand” tool  
13. Left click on the image on (105, 120) point  
14. Click [Delete] button  
15. Check that historyRow5 DOM element exists and contains a string “Polygon with id 0 was deleted”  
17. Left click on the image on (305, 320) point  
18. Select object class “class 0”  
19. Check that historyRow6 DOM element exists and contains a string “Class of polygon 1 was changed to class 0”  
20. Compare returned JSON markup to 
`[{\"points\":[[300,300],[300,400],[400,300]],\"parameters\":{\"class\":\"class 0\"}}]`  
21. Click “Undo” button (#delete-row)  
22. Check that historyRow6 DOM element does not exist  
23. Compare returned JSON markup to 
`[{\"points\":[[300,300],[300,400],[400,300]],\"parameters\":{}}]`  
24. Click “Undo” button (#delete-row)  
25. Check that historyRow5 DOM element does not exist  
26. Compare returned JSON markup to 
`[{\"points\":[[100,100],[100,200],[200,100]],\"parameters\":{\"class\":\"class 0\",\"is occluded\":true,\"select an option\":\"option 1 name\"}}, {\"points\":[[300,300],[300,400],[400,300]],\"parameters\":{}}]`  
27. Click “Undo” button (#delete-row)  
28. Check that historyRow4 DOM element does not exist  
29. Compare returned JSON markup to 
`[{\"points\":[[100,100],[100,200],[200,100]],\"parameters\":{\"class\":\"class 0\",\"is occluded\":true,\"select an option\":\"option 1 name\"}}]`  
30. Click “Undo” button (#delete-row)  
31. Check that historyRow3 DOM element does not exist  
32. Compare returned JSON markup to 
`[{\"points\":[[100,100],[100,200],[200,100]],\"parameters\":{\"class\":\"class 0\",\"is occluded\":true}}]`  
33. Click “Redo” button (#add-row)  
34. Check that historyRow3 DOM element exists and contains a string “Parameter select an option of polygon 0 was changed to option 1 name”  
35. Compare returned JSON markup to 
`[{\"points\":[[100,100],[100,200],[200,100]],\"parameters\":{\"class\":\"class 0\",\"is occluded\":true,\"select an option\":\"option 1 name\"}}]`  
36. Click “Redo” button (#add-row)  
37. Check that historyRow4 DOM element exists and contains a string “Polygon was added and assigned an id 1”  
38. Compare returned JSON markup to 
`[{\"points\":[[100,100],[100,200],[200,100]],\"parameters\":{\"class\":\"class 0\",\"is occluded\":true,\"select an option\":\"option 1 name\"}}, {\"points\":[[300,300],[300,400],[400,300]],\"parameters\":{}}]`  
39. Click “Redo” button (#add-row)  
40. Check that historyRow5 DOM element exists and contains a string “Polygon with id 0 was deleted”  
41. Compare returned JSON markup to 
`[{\"points\":[[300,300],[300,400],[400,300]],\"parameters\":{}}]`  
42. Click “Redo” button (#add-row)  
43. Check that historyRow6 DOM element exists and contains a string “Class of polygon 1 was changed to class 0”  
44. Compare returned JSON markup to 
`[{\"points\":[[300,300],[300,400],[400,300]],\"parameters\":{\"class\":\"class 0\"}}]`  
45. Click “iconOnHistoryRow6” button (#iconOnHistoryRow6)  
46. Check that historyRow6 DOM element does not exist  
47. Check that historyRow5 DOM element exists and contains a string “Polygon with id 0 was deleted”  
48. Compare returned JSON markup to 
`[{\"points\":[[300,300],[300,400],[400,300]],\"parameters\":{}}]`
49. Check that #delete-row DOM element does not contain class “disabled”  
50. Left click on the image on (305, 320) point // “Hand” tool is still selected at this point  
51. Select object class “class 1”  
52. Check that historyRow6 DOM element exists and contains a string “Class of polygon 1 was changed to class 1”  
53. Compare returned JSON markup to 
`[{\"points\":[[300,300],[300,400],[400,300]],\"parameters\":{\"class\":\"class 1\"}}]`  
53. Check that #delete-row DOM element does contain class “disabled”
54. Check that #add-row DOM element does not contain class “disabled”

### Case 12
**Switching between languages**

0. Polygon tool is selected by default  
1. Check that activeLanguage.getLanguageName() returns “english”  
2. Check that #message_space DOM element contains either a string returned by language.english().markupImageWithToolsNotificationString, or a string returned by language.english().notTheFullImageWillBeShownNotificationString  
3. Check that #label-parameters-block-title DOM element contains a string returned by language.english().labelParameters  
4. Check that #history-block-title DOM element contains a string returned by language.english().history  
5. Label {(100, 100), (100, 200), (200, 100)} polygon.  
5.1. left click on the 100, 100 pixel of the image  
5.2. left click on the 100, 200 pixel of the image  
5.3. left click on the 200, 100 pixel of the image  
5.4. left click on the 100, 100 pixel of the image  
6. Check that historyRow0 DOM element exists and contains a string returned by language.english().polygonWasAddedAndAssignedAnId  
7. Select "russian" option in #language-selection-select select  
8. Check that activeLanguage.getLanguageName() returns “russian”  
9. Check that #message_space DOM element contains either a string returned by language.russian().markupImageWithToolsNotificationString, or a string returned by language.russian().notTheFullImageWillBeShownNotificationString  
10. Check that #label-parameters-block-title DOM element contains a string returned by language.russian().labelParameters  
11. Check that #history-block-title DOM element contains a string returned by language.russian().history  
12. Check that historyRow0 DOM element exists and contains a string returned by language.russian().polygonWasAddedAndAssignedAnId  
13. Select "english" option in #language-selection-select select  
14. Check that activeLanguage.getLanguageName() returns “english”  
15. Check that #message_space DOM element contains either a string returned by language.english().markupImageWithToolsNotificationString, or a string returned by language.english().notTheFullImageWillBeShownNotificationString  
16. Check that #label-parameters-block-title DOM element contains a string returned by language.english().labelParameters  
17. Check that #history-block-title DOM element contains a string returned by language.english().history
18. Check that historyRow0 DOM element exists and contains a string returned by language.english().polygonWasAddedAndAssignedAnId