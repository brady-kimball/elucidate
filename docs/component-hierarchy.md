## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - NavBar

 **Home**
 - TrackIndexContainer
 - GenreIndexContainer

 **GenreIndexContainer**
 -Genre

 **TrackIndexContainer**
 - TrackIndex

 **TrackContainer**
 -Track
 -AnnotationContainer

 **Annotation Container**
 - AnnotationItemContainer
 - AnnotationFormContainer

 **AnnotationFormContainer**
 -AnnotationForm

 **AnnotationItemContainer**
 - AnnotationItem
 - CommentContainer
 - CommentFormContainer

 **CommentContainer**
- CommentIndex


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/tracks/:trackId" | "TrackContainer" |
| "/home/genres/:genreId" | "GenreIndexContainer" |
| "/home/search-results" | "SearchResultsContainer"
