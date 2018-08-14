# BOOKCLUB FULL STACK APP #

Book Club App - Tirzah Evangelista

This is an app for Book Club members to create & follow club events and comment/discuss the books they are reading.
[see it live:](https://t-bookclub-app.herokuapp.com/)

## MVP USER STORIES: 
<!-- EVENTS:  -->
- As a user I want to create  an Event that includes the book(name, image, blurb/quote), Event Host name, Event Date & Event Location Address.
- As a user I want to be able to edit any element of an event I created, so I can make updates or fix errors in the event.
- As a user I want to be able to delete any event I created, so that I can remove an irrelevant or erroneous event.
- As a user, I want to be able to view details of any event past, current or future.
- As a user, I want to be able to get back to the main event page, so that I can view a different event or create a new one.

## POST MVP Ideas:
- Use goodreads API: https://www.goodreads.com/api
- As a user I want to be able to Find books by title, author, or ISBN and pulls ratings and image of book when I am creating or editing an event.
- AS a user I would like to be able to use my Goodreads profile to login.

### Location Directions
- As a User, I want to be able to click on the Event address and get directions to the event, so I don't have to copy the event address, then exit the app to access another app then paste my address then click get directions. (Maybe use Google maps API for directions? https://developers.google.com/maps/documentation/directions/ ).

### Commenting
- As a user I want to create/read/update/delete comments, so that I can communicate with others that are following an Event.
- As a user I want to be able to indicate what chapter, page or Audio(time) I'm commenting about, so that those reading my comment will know where/what my comment is refering to. Is there a way to map what page/chapter the audio is on based on time input??

### Comment replies & nesting
- As a user I want to be able to reply to a comment, so that I can share my thoughts.
- As a user I want to continue a reply thread, so that my reply to a comment has context and doesn't get lost.
- As a user I only want to see one level of nesting in replies, so that it doesn't get too convoluted and remains easy to read.
### Masked comments
- As a user I want to be able to mask(blur out) comments that have spoilers, along with chapter indicator, it allows the "comment-reader" to decide if they want to unmask spoiler comments based on where they are in the book as well.
- As a user I want to be able to unmask comments that have spoilers in them, so that I can read the comment and possibly reply to it.
- As a user I do not want to reply to comments that are masked, so I don't unintentionally make an unrelated reply to a comment I can't read anyway.
- As a user I would like the option of getting notifications.

## Mind Map
![mindmap](https://user-images.githubusercontent.com/16514603/39389130-fb090836-4a42-11e8-9c1e-41d5e0b6cb99.png)
