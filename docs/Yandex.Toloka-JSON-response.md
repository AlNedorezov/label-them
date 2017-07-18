# Request 
    GET /api/v1/assignments?sort=id&limit=10
    Host: https://toloka.yandex.ru
    Authorization: OAuth <OAuth-token>

### Request Example
https://toloka.yandex.ru/api/v1/assignments?pool_id=23086&sort=id&limit=10

# Response Structure

### items
List of completed task in the pool.

### tasks
List of input values for tasks in the pool uploaded as .tsv in Toloka pool editor.

### solutions
List of solutions provided by Toloka users.

### result
JSON which contains list of **dataEntites** - labelled polygons with parameters for a particular task.  

**points** - coordinates for each point of the polygon.

**parameters** - parameters of the polygon.

# Response Example

    {
      "items": [
        {
          "id": "0926dd3c-aeed-4cfa-afaf-d6531a0a6870",
          "task_suite_id": "6edc8aaa-9bf7-4071-8281-97e9c8c12288",
          "pool_id": "23086",
          "user_id": "7f5415f14bef23dfc9228eae06e5ad72",
          "status": "ACCEPTED",
          "reward": 0,
          "tasks": [
            {
              "id": "8408d1bf-8b89-434b-9996-2075e33bf847",
              "input_values": {
                "image_rel": "/LT-Data/St. Petersburg.jpg",
                "json_params": "{"classes":["class 0","class 1","class 2","class N"],"parameters":[{"type": "boolean","name": "is occluded"},{"type": "string","name": "phone number","prefix": "+7"},{"type": "select","name": "select an option","options":["option 1 name","option 2 name","option N name"]},{"type": "select","name": "select an option of another kind","options":["option B-1 name","option B-2 name","option B-N name"]}]}"
              },
              "known_solutions": [
                {
                  "output_values": {
                    "result": "true"
                  },
                  "correctness_weight": 1
                }
              ]
            }
          ],
          "solutions": [
            {
              "output_values": {
                "result": "[{""points"":[[167,70],[249,72],[252,114],[161,128]],""parameters"":{""class"":""class 1"",""is occluded"":true}},{""points"":[[106,195],[168,172],[188,202],[98,228]],""parameters"":{""class"":""class N""}}]"
              }
            }
          ],
          "mixed": false,
          "created": "2017-04-30T19:26:30.116",
          "submitted": "2017-04-30T19:26:44.438",
          "accepted": "2017-04-30T19:26:44.438"
        }
	    ],
	    "has_more": false
    }