## Component Hierarchy
**Entry**
-Root

**Root**
App

**App**
- NavBarContainer

**NavBar Container**
- NavBar

**NavBar**
- NavBar

**AuthFormModalContainer**
- AuthFormModal

**AuthFormModal**
- AuthFormContainer

**AuthFormContainer**
- LogInForm
- SignUpForm

**HomeContainer**
 - Home

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
