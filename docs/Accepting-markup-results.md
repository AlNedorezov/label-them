*LabelThem*, integrated with Yandex.Toloka, allows to check the quality of the images markup made by Mechanical Turks. Later on we will refer to this feature as Delayed (or Offline) acceptance. 

Delayed Acceptance is the ability to check markup quality within the deadline period (in days), and either accept or reject it. Mechanical Turks receive payment only for accepted markups. Please, refer to the ["Performing the Review" instruction](https://yandex.com/support/toloka-requester/concepts/accept.html) provided by Yandex.Toloka for mode details.

Delayed Acceptance can be enabled [during the creation of a pool](https://github.com/innosoft-pro/label-them/wiki/Getting-started-YandexToloka#adding-a-pool) by choosing the "Offline accept" parameter and setting the number of days for review (from 1 to 21) into the "Deadline" field (see the image below for reference).

![Enabling Delayed Acceptance in Yandex.Toloka during the creation of a pool](https://s4.postimg.org/m1wxh1pn1/Screenshot_from_2017-08-02_15-45-19.png)

During the assignment review reviewer (or Researcher) can ONLY either accept the markup provided by the Mechanical Turk, or reject it.

For rejected markups Researcher will be asked to provide a comment, explaining why he declined it.

A detailed guide on performing a review can be found at "Performing the review" section of the ["Reviewing Assignments" instruction](https://yandex.com/support/toloka-requester/concepts/accept.html).