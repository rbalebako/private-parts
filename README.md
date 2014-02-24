# Private Parts
#### A responsive visualization framework for privacy policies

### Intro

Privacy policies are broken. Most are so obfuscated in legalese that only a trained attorney can make sense of them, and even the ones that are written in plain English are as long as a good novel. 
In a world where privacy is more important than ever, Private Parts is an easy to use tool that helps you create a beautiful, responsive, and clear privacy policy for your business that your customers can actually understand. 
The best part? We've designed Private Parts to make the process as painless as possible. If you already have your content ready, you should be up and running in less than 5 minutes.

Check out an example of the finished product at
<a href="https://www.lookout.com/legal/privacy" target="_blank">https://www.lookout.com/legal/privacy</a>

### What you'll need

You'll need a combination of legal and technical skillsets to take full advantage of the project, but the project has been designed to be as plug-and-play as possible, and even junior developers should have no problems getting things running.
The instructions below have been designed generically for 'developers' and 'lawyers' -- but if you're a bootstrapped startup there's no reason you shouldn't be able to do it all yourself!

### Project Installation
#### For developers

1. Fork this repo
2. Clone it into your machine
3. Install the dependencies with ``npm install`` (you need [node.js](http://nodejs.org/download/) to build Private Parts)
4. Run ``grunt live``
5. Go to [http://localhost:3333/build/html/](http://localhost:3333/build/html/) to see the default privacy policy running

### Usage

#### For lawyers

1. Download a copy of ``docs/Legal Questionnaire.xls`` and follow the instructions on both tabs. Your answers to the questions in this spreadsheet will form the backbone for the content in your short form privacy policy. 
## Remember that the point is to create a *short* privacy policy. Keep your answers below 200 characters, but the shorter, the better.
2. Hand off the completed spreadsheet to your developer, who will copy & paste your responses into the ``config.json`` source file.

#### For developers

Private Parts is designed to be plug-and-play, and requires minimum configuration. You should basically focus on two files:

- ``assets/config.json``: Options and text for the policy itself. This is where you'll need to include content from your lawyer (see above). The project ships with all supported options, all NTIA-supported categories.
  - **pageOptions**: options for the entire policy. They're pretty self-explanatory
  - **categories**: list of all of the data that is collected and shared. Notable options are
    - **type**: either ``collect`` or ``share``
    - **options**: details about the data
    - **emptyText**: text displayed when the data is either not collected or shared (when **options** is empty).
    - **class**: HTML class of the element used to display this category
- ``less/variables.less``: Private Parts uses [LESS](http://lesscss.org/) for CSS preprocessing. Change the variables in this file to change the appearance of your privacy policy.
- ``assets/img/logo.png``: Replace this with your logo.

#### Additional customization
If you want to further customize the policy, you can include additional code in ``assets/less/custom.less`` and ``assets/js/custom.js``.

### Shipping

#### For developers

When you're done entering your content and customizing the look and feel of your privacy policy, just run ``grunt dist``. This will generate two files, and you only need to use one of them:

- ``build/html/index.html``: A complete, responsive web page with all of the required CSS and JavaScript code minified and embedded into the HTML. You can just drop this file on any web server and you're done. 
- ``build/html/main.html``: Just the body of the web page, so you can integrate it with your website template (usually by adding a header and a footer)

## Credits

Private Parts is a [Lookout](https://lookout.com) initiative.
