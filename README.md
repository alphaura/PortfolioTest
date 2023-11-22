# Portfolio Test

This project is were I test new implementations to my portfolio site, such as new pages, features, animations, or if needed, a whole revamp of the portfolio site.
In order to safe guard my main portfolio, I first update this one, make sure everything is okay, and then I duplicate everything to my main portfolio.

## Table of contents

- [Navigation Menu](#nav-menu)
- [Homepage](#homepage)
  - [Homepage-design](#homepage-design)
- [Portfolio Page](#portfolio-page)
  - [Portfolio-page-design](#portfolio-page-design)
- [Project Page](#project-page)
- [Footer](#footer)

## nav-menu

For the menu, so far I opted for a very basic looking menu. Having that I don't have a huge menu, I decided to not implement a hamburger menu so that the user avoids from having an extra
click to open the menu, and also to help the website's loading speed.

To enhance it a bit, I added a small @keyframes animation to the navigation bar, to slide down upon the page is loaded.

As you go through my portfolio, you will notice that the navigation bar changes colour when you go in the project pages, which favours the design of the page.

## homepage

I do have something for big bolded text, as I see it as a way to catch someones eye, and for me personally, it kind of looks cool and clean at the same time.

The aim of the landing page is to showcase the languages and tools I have honed or use, some information about myself, highlighted projects + a link to the main portfolio page, a timeline
like section indicating my journey, and a contact us page.

### homepage-design

- For an extra enhanced design experience, I went with a similar animation to the navigation menu for the header as well, having it slide from the top of the page, however, slightly faster
  then the navigation menu.

- The "language and tools" section, isn't fully static. It's only static for tablets and desktop, because on small tablets or large mobiles, this section is moving from right to left which
  enhances the mobile experience.

- The project highlight section shows the best project I would have worked on at that time. On desktop it will showcase the best 6 projects, whilst on smaller devices it will showcase
  the best 4 projects I worked on. In both instances, the "more projects here" feature is still there, so that the user can view the rest of the projects

- The creative timeline section looked a bit boring having it static, so I looked up how I can make the text slide from the left only whilst it being scrolled into viewport, and with a decent
  amount of research, and trials and errors, I managed to make it work. Whilst going through different device sizes, I noticed that it wasn't working as intended on mobile, so I made it work
  for bigger devices only.

## portfolio-page

The goal of this page is to showcase all of my projects in a minimal way. I think this page has the least HTML code from all the files across my portfolio, as the idea for this page is for it
to be a bridge between my landing page and the actual project. The minimal design of this page keeps the transition leading to the project page clean.

### portfolio-page-design

- The hero section follows the same slide from the top animation as the one on the homepage, since this page also serves as a landing page as well.

- In a recent project that I worked on, I came across the interesting use of the CSS overflow, so I wanted to implement this feature on small tablets and mobiles so that I make an internal
  scroll section within the projects, however, I didn't like the scrollbar being visible. So with some research, I came across how I can remove the scrollbar, and this allowed me to create
  a clean scrolling section of my projects whilst on small screen devices.

## project-page

The design skeleton of the project pages are all the same, only the content is being changed according to the project itself so that it allows me to keep consistency throughout all pages.

Here I'm showcasing the below;

- Title of project
- Languages used in the project
- Small description
- Link to design
- Link to actual project
- Mockup of the project
- "The process" section describing how I went on working on the project
- "The design" section, describing how I came up with the design and how I designed it
- Image/s showcasing the design
- "The challenge" section, describing some challenges I had and how I overcome them
- Video showing project demo

For this page, I didn't do any fancy animations, as I wanted that the actual content be the main focus, so my main focus in this case, was to make sure the responsiveness looked good.

## footer

The footer section is the same throughout the whole website, which allows me to keep consistency of this section throughout all pages. Didn't do anything fancy for this section so that if the
user wishes to contact me, they can easily get access to my email by simply clicking on the italic text "drop me an email". One can also reach out to me via LinkedIn on the bottom of the page.
