# Documentation Finance app - Killian Serluppens - GUI pt1

## **Marktstudie**
### Comparing app
- https://store.d-velop.com/en/d.velop-invoices/10002150-en.2
- I compared my app to an the D.velop invoice manager application
  <br>

### Differences
- My app has a way better UI. the d.velop application uses a somewhat excel type of style to store the invoice.
- Although this way you can show way more details, my application is more focussed t personnel use and I think that the d.velop app is more focuses for big companies who get a lot of invoices per week.
- The d.velop application has also a nice function so that you can view the invoice in a pdf viewer in browser without downloading it first. this is a nice feature that will prevent unintentional and spam downloads.
- Because of the app's not easy appealing UI i think you have to learn how to use the application first. And mine hs a easy use style.
<br>

### Pros and cons
- #### Pros d.velop's app
  - It has a lot of detail for every input that an invoice could have
  - The pdf viezwer is really handy
  - for professional use in big company this will be the better choice
- ### Cons develop app
  - The UI is not appealing and it will have a learning curve
  - when you have a lot of data it can be really confusing if you don't have a naming structure.
- ### Pros My app
  - Friendly UI so users can access it imminently.
  - better for personal use or small company because of the easy use.
- ### Cons my app
  - No way to view the invoice. this can be really annoying when you also want to save the papers on pdf / paper
  - not a lot of details for invoices
<br>

### Ui Style
- D.velop app
  - this app uses a spreadsheet UI
  - I recognize this in the grid base template where it saves all the data and also the simple nav bar at the top with groups of functions in.
- My Application
  - I use a card based Ui for the dashboard with some hints of Neumorphism (the shadows)
  - this is because i use shadows, boxes tho view some simple data views.
<br>

## **Goals of my application**
### My Goals
- The most important part is that the user can create and overview their invoices in a simple and nice way.
- this is done in 2 parts:
    - The Dashboard: 
      - this is the page here you have a simple overview of some data like:
        - total amount of invoices
        - total amount of paid and unpaid
        - and 5 oldest invoices
      - the user don't need to do any steps to have this, because thi is the startup page
    - Add Invoice
      - You can of course add an invoice to do this follow these steps:
        1. Go to the dashboard page and press on the add invoice button
        2. when you have pressed the button it will navigate you to the add invoice page where there is an form where you can fill in your invoice data.
        3. once you have pressed the add invoice button there will be a success message and reload the page after a few seconds
    - The manage page
      - This page is used to overview and manage your invoices.
      - You can edit and delete.
      - These are the steps for deleting:
        1. Go to the manage page via the top navigation or the button on the dashboard
        2. when you are on the manage page press the red delete button
        3. this will pop up a modal to ask for you confirmation
           1. When you press the yes button it will delete the invoice
           2. when you press the no button it will close the modal and the invoice will not be deleted
      - these are the steps for editing the invoice
        1. Go to the manage page via the top navigation or the button on the dashboard
        2. when you are on the manage page press the yellow edit button
        3. this will navigate you to the edit page where you can ee the current data of the invoice in the fields
        4. now you can edit the fields and pres the edit button to confirm the action
        5. you will get and success message when it is ok after a few seconds it will reload the page and show you the new data in the fields
<br>

## **Reflexion**
### what do i want to keep?
  - the dashboard.
    - i think a dashboard in a must for financial applications just because it can give you a lot of information on 1 page in a nice and clean overview.
    - the manage page. it is really simple even tho there are not a lot of details but this can be fixed with a detail page of you can just click on the legend tab to show certain amount of information (this could be added).
### What are some weak points
  - The amount of details and lack of validation. the validation is definitely an important part of an application and it is a must to have thi sin our application.

## **Wireframe**
### Commentary v1
- commentary:
  - Not to many boxes on the dashboard --> this could maybe be to overwhemingly
    - I will keep the boxes limeted but not to little because else the point of a dashboard is gone
    - this comment i found a bit wierd because in my opinion a dashboard is used for a lot of info
  - No name for the invoice --> keep it per it / code
    - removed the name
    - I found this commentary usefull an invoice is not reallya thing you give a name, a short discription  and a code is better for filtering
### Commebntary v2
  - Header text darker
  - Some more darker colours and a "Better blue"
  - the blue i used now came over a bit depressive / sad (not good when u have an application with money stuff).
 


## **Extra uitleg**
- de register pagina is al toegevoegd op voorberijding voor GUI deel 2.
- eerst wilde ik een overview maken van de users maar heb dit dan toch maar veranderd aangezien de focus op de invoices zat.

