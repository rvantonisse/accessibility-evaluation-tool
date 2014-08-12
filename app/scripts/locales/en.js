'use strict';

try {
  angular.module('wcagReporter');
} catch (e) {
  angular.module('wcagReporter', ['pascalprecht.translate']);
}

angular.module('wcagReporter').config(function ($translateProvider) {
  $translateProvider.translations('en', {
    'NAV_LINKS': 'Important links',
    'NAV_IMPORT': 'Load Report',
    'NAV_EXPORT': 'Save Report',
    'NAV_HELP': 'Help',
    'CLICK_EXPAND': 'Show section contents',
    'CLICK_COLLAPSE': 'Hide section contents',
    'WZRD_START': 'Start',
    'WZRD_SCOPE': '1. Define Scope',
    'WZRD_EXPLORE': '2. Explore Website',
    'WZRD_SAMPLE': '3. Select Sample',
    'WZRD_TEST': '4. Audit Sample',
    'WZRD_FINALIZE': '5. Report Findings',
    'WZRD_SAVE': 'View Report',
    'HD_START': 'Website Accessibility Evaluation Report Generator',
    'HD_STEP1': 'Step 1: Define the Evaluation Scope',
    'HD_STEP2': 'Step 2: Explore the Target Website',
    'HD_STEP3': 'Step 3: Select a Representative Sample',
    'HD_STEP4': 'Step 4: Audit the Selected Sample',
    'HD_STEP5': 'Step 5: Report the Evaluation Findings',
    'HD_REPORT': 'Sample Website Accessibility Evaluation Report',
    'HD_LOAD': 'Load Evaluation Report',
    'HD_SAVE': 'Save Evaluation Report',
    'HD_STRUCT_SAMPLE': 'Structured Sample',
    'HD_RANDOM_SAMPLE': 'Randomly Selected Sample',
    'HD_SAMPLE': 'Sample of Audited Web Pages and Web Page States',
    'HD_SAMPLE_SELECT': 'Sample to Evaluate',
    'HD_CRITERIA': 'Success Criteria to Evaluate',
    'SELECT_PAGE_TO_WORK_ON': 'Highlight specific web pages and web page states',
    'RESULTS_FOR': 'Results for',
    'SAMPLE_FINDINGS': 'Results for the entire sample',
    'DOWNLOAD_REPORT': 'Download and customize this report',
    'INTRO_START_1': 'This tool helps you generate a report according to the {0}. The tool does not perform any accessibility evaluation. It provides options that allow you to input information about the website and the evaluation, including the evaluation results. It helps you follow the steps suggested by WCAG-EM, and to generate a structured report from the input that you provide. None of the input is required and you can go back and forth between the steps in any sequence. Once you are done providing input you can download and further customize the report to your liking.',
    'INTRO_START_1_0': 'Website Accessibility Conformance Evaluation Methodology (WCAG-EM)',
    'INTRO_START_2': 'All functionality provided by this tool is now loaded and running locally in your web browser. It does not require an internet connection beyond this point to work. None of your activity or data is recorded, and it is lost when you close your web browser window. You can {0} locally to your own computer at any time to avoid losing data, or to transfer it to another computer or web browser session.',
    'INTRO_START_2_0': 'save an evalution report',
    'INTRO_STEP1': 'Provide the overall scope of the evaluation, such as the website name, the web pages in scope of the evaluation, the conformance target, the accessibility support baseline, and any additional evaluation requirements. This step is ideally carried out in consultation with the evaluation commissioner (who may or may not be the website owner) to ensure common expectations about the scope of the evaluation. Initial exploration of the target website during this step may be necessary to better know specifics of the website and the required evaluation. Detailed exploration of the website is carried out in the next step.',
    'INTRO_STEP2': 'Explore the target website to be evaluated, to develop an initial understanding of the website and its use, purpose, and functionality. Much of this may not be immediately apparent to you, in particular if you are from outside the development team. In some cases it is also not possible to exhaustively identify and list all functionality, types of web pages, and technologies used to realize the website and its applications. The initial exploration carried out in this step is typically refined in the later steps, as you learn more about the target website. Involvement of the website owners and website developers can help you make your explorations more effective.',
    'INTRO_STEP3': 'Select a sample of web pages and web page states that is representative of the target website to be evaluated. The purpose of this selection is to ensure that the evaluation results reflect the accessibility performance of the website with reasonable confidence. In cases where it is feasible to evaluate all web pages and web page states of a website, which is highly recommended, this sampling procedure can be skipped and the \'selected sample\' in the remaining steps of this evaluation process is the entire website. In some cases, such as for small websites, sampling may result in selecting all web pages and web page states of a website.',
    'INTRO_STEP4': 'Record the outcome of your auditing of all of the web pages and web page states selected in the previous step, and compare the structured sample to the randomly selected sample. The audit is carried out according to the five {0} at the target conformance level defined in the Step 1. You can provide results globally for the entire sample, or you can select \'show results for individual web pages\' to provide results for particular web pages and web page states. To manage the amount of information being displayed you can also select particular pages in \'sample to evaluate\', for example to show only the particular page that you are currently auditing.',
    'INTRO_STEP4_0': 'WCAG 2.0 conformance requirements',
    'INTRO_STEP5': 'Provide concluding information about the evaluation, such as the evaluation date or period and a summary of the overall evaluation findings. The detailed evaluation findings provided in the previous step are also included below to help you summarize them and for your review.',
    'INTRO_REPORT': 'Below is the sample evaluation report based on the input that you provided in previous steps. You can go back and adjust any of this information as needed. You can download the evaluation report as HTML to further customize it to your liking, and you can save the data locally to your own computer to retrieve it at a later time.',
    'INTRO_SAVE': 'The link below allows you to download and save the data of your current evaluation report locally on your own computer. This is useful to avoid losing data, or to transfer it to another computer or web browser session.',
    'INTRO_LOAD': 'Select an evaluation report data file that was previously saved on your computer to load and continue working on it. ',
    'RAND_SAMPLE_LENGTH': 'A structured sample of {0} web pages and web page states requires {1} randomly selected web pages and web page states',
    'LABEL_SITE_NAME': 'Website name',
    'LABEL_SITE_SCOPE': 'Scope of the website',
    'LABEL_CONFORMANCE_TGT': 'Conformance target',
    'LABEL_SPECIFICS': 'Recordings of the evaluation specifics',
    'LABEL_EXTRA_REQUIREMENTS': 'Additional evaluation requirements',
    'LABEL_SUPPORT_BASE': 'Accessibility support baseline',
    'LABEL_RELIEDUP_TECH': 'Web technologies relied upon',
    'LABEL_COMMON_PAGES': 'Common web pages',
    'LABEL_ESSENT_FUNC': 'Essential functionality of the website',
    'LABEL_VARIETY_PAGE_TYPES': 'Variety of web page types',
    'LABEL_OTHER_PAGES': 'Other relevant web pages',
    'LABEL_COMMISSIONER': 'Evaluation commissioner',
    'LABEL_CREATOR': 'Evaluator',
    'LABEL_TITLE': 'Report title',
    'LABEL_DATE': 'Evaluation date',
    'LABEL_SUMMARY': 'Executive summary',
    'LABEL_PAGE': 'Web page',
    'LABEL_HANDLE': 'Handle',
    'LABEL_OUTCOME': 'Outcome',
    'LABEL_DESCR': 'Findings',
    'LABEL_TECH': 'Web Technology',
    'LABEL_TECH_SPEC': 'Specification URI',
    'LABEL_SELECT_FILE': 'Select the evaluation',
    'ITEM': 'Item',
    'BTN_REMOVE_PAGE': 'Remove page',
    'LABEL_INFO': 'Info',
    'LABEL_CLOSE_INFO': 'Close info',
    'WCAG_A': 'WCAG 2.0 level A',
    'WCAG_AA': 'WCAG 2.0 level AA',
    'WCAG_AAA': 'WCAG 2.0 level AAA',
    'PLH_HANDLE': 'Shortname to help you identify the web page or web page state',
    'PLH_PAGE_URL': 'URL or description of the web page or web page state',
    'PLH_TECH': 'Name of the web technology that is relied upon for conformance',
    'PLH_TECH_SPEC': 'URI or description for the web technology specification',
    'PLH_ASSERT_DESC': 'Observations made during evaluation',
    'INF_RELIEDUP_TECH': 'Identify the web technologies {1} to provide the website. Refer to {0} for more information.',
    'INF_RELIEDUP_TECH_0': 'WCAG-EM Step 2.d: Identify Web Technologies Relied Upon',
    'INF_RELIEDUP_TECH_1': 'relied upon according to WCAG 2.0',
    'INF_COMMON_PAGES': 'Identify web pages and web page states that are relevant to the entire website. This includes the homepage, login page, and other entry pages, and, where applicable, the sitemap, contacts page, site help, legal information, and similar web pages that are typically linked from all other web pages (usually from the header, footer, or navigation menu of a web page). Refer to {0} for more information.',
    'INF_COMMON_PAGES_0': 'WCAG-EM Step 2.a: Identify Common Web Pages of the Website',
    'INF_ESSENT_FUNC': 'Identify functionality of the target website that, if removed, fundamentally changes the use or purpose of the website for users. This includes information that users of a website refer to and tasks that they carry out to perform this functionality. Examples of essential functionality include:\n \'selecting and purchasing a product from the shop area of the website\'\n \'completing and submitting a form provided on the website\'\n \'registering for an account on the website\'\n Refer to {0} for more information.',
    'INF_ESSENT_FUNC_0': 'WCAG-EM Step 2.b: Identify Essential Functionality of the Website',
    'INF_VARIETY_PAGE_TYPES': 'Identify the types (as opposed to instances) of web pages and web page states, such as those with varying styles, layouts, structures, and functionality. This list will be used in the following steps to help you select representative web page instances for evaluation. Refer to {0} for more information.',
    'INF_VARIETY_PAGE_TYPES_0': 'WCAG-EM Step 2.c: Identify the Variety of Web Page Types',
    'INF_OTHER_PAGES': 'Identify web pages and web page states that are relevant to people with disabilities and to accessibility of the website, if they have not already been identified as common web pages. Examples of other relevant web pages include web pages explaining the accessibility features of the website, information and help on the use of the website, explanations for settings, preferences, options, and shortcuts, and contact information, directions, and support instructions. Refer to {0} for more information.',
    'INF_OTHER_PAGES_0': 'WCAG-EM Step 2.e: Identify Other Relevant Web Pages',
    'INF_COMMISSIONER': 'State the person, team of people, organization, in-house department, or other entity that commissioned the evaluation.',
    'INF_CREATOR': 'State the person, team of people, organization, in-house department, or other entity responsible for carrying out the evaluation.',
    'INF_TITLE': 'Provide a title for the website accessibility evaluation report. For example:\n \'Evaluation Report for Example Organization\'\n \'Webshop Accessibility Analysis and Repair Suggestions\'',
    'INF_DATE': 'Provide the completion date or duration period for carrying out this evaluation.',
    'INF_SUMMARY': 'Provide a brief summary of the evaluation findings to give an overview on the results. For example, describe the overall situation of the website with regard to accessibility and key observations you made during the evaluation, such as frequently occurring issues and patterns.',
    'INF_SPECIFICS': 'As needed, archive the web pages and web page states audited, and record the evaluation tools, web browsers, assistive technologies, other software, and methods used to audit them. Refer to {0} for more information.',
    'INF_SPECIFICS_0': 'WCAG-EM Step 5.b: Record the Evaluation Specifics',
    'INF_STRUCT_SAMPLE': 'Select web pages and web page states that reflect all identified (1) common web pages, (2) essential functionality, (3) types of web pages, (4) web technologies relied upon, and (5) other relevant web pages. The common web pages and other relevant web pages from the previous step are automatically included below. Refer to {0} for more information.',
    'INF_STRUCT_SAMPLE_0': 'WCAG-EM Step 3.a: Include a Structured Sample',
    'INF_RAND_SAMPLE': 'Select a randomly selected sample of web pages and web page states. The number of web pages and web page states to randomly select is 10% of the structured sample selected above. Refer to {0} for more information.',
    'INF_RAND_SAMPLE_0': 'WCAG-EM Step 3.b: Include a Randomly Selected Sample',
    'INF_SITE_NAME': 'Provide a name for the website that you would like to evaluate. For example:\n \'Public Website of Example Organization\'\n \'Webshop of Example Company\'\n \'Intranet of Example University\'',
    'INF_SITE_SCOPE': 'Define the scope of the website, so that for each web page it is unambiguous whether it is within the scope of evaluation or not. Refer to {0} for more information.',
    'INF_SITE_SCOPE_0': 'WCAG-EM Step 1.a: Define the Scope of the Website',
    'INF_CONF_TGT': 'Select a target WCAG 2.0 conformance level (\'A\', \'AA\', or \'AAA\') for the evaluation. Refer to {0} for more information.',
    'INF_CONF_TGT_0': 'WCAG-EM Step 1.b: Define the Conformance Target',
    'INF_SUPPORT_BASE': 'Define the web browsers, assistive technologies, and other {1} for which features provided on the website are to be {2}. Refer to {0} for more information.',
    'INF_SUPPORT_BASE_0': 'WCAG-EM Step 1.c: Define an Accessibility Support Baseline',
    'INF_SUPPORT_BASE_1': 'user agents',
    'INF_SUPPORT_BASE_2': 'accessibility supported',
    'INF_EXTRA_REQUIREMENTS': 'Define any additional evaluation requirements agreed with the evaluation commissioner. Refer to {0} for more information.',
    'INF_EXTRA_REQUIREMENTS_0': 'WCAG-EM Step 1.d: Define Additional Evaluation Requirements',
    'INF_AUDIT_SAMPLE': 'The following is a list of all web pages and web page states selected in the previous step. You can select items to make them available under \'Success Criteria to Evaluate\' or de-select items to hide them. This allows you to work page-by-page or on several web pages at the same time.',
    'INF_AUDIT_CRITERIA': 'The following is a list of all success criteria applicable, based on the conformance target set in step 1. You can provide evaluation results globally for the entire sample, or select \'show results for individual web pages\' to provide results for each web page and web page state in your sample.',
    'WARNING_BEFORE_UNLOAD': 'WARNING: WCAG-EM Reporter does not automatically save your changes. If you want to save changes soyou can continue later, save a local copy of the data using export',
    'BY': 'Report Creator:',
    'COMMISION_BY': 'Evaluation Commissioner:',
    'HD_SPECIFICS': 'Recording of evaluation specifics',
    'HD_DOCS': 'Related WCAG 2.0 resources',
    'HD_SCORE': 'Overview of audit results',
    'HD_SCOPE': 'Scope of the evaluation',
    'HD_SUMMARY': 'Summary of the evaluation findings',
    'HD_CRITERIA_REPORT': 'Detailed audit results',
    'PRINCIPLE': 'Principle',
    'BTN_ADD_TECH': 'Add web technology',
    'BTN_REMOVE_TECH': 'Remove web technology',
    'BTN_ADD_PAGE': 'Add web page or web page state',
    'BTN_START_EVAL': 'Start a new evaluation report (clears data)',
    'BTN_CONTINUE_EVAL': 'Continue working on your open evaluation report',
    'BTN_IMPORT_EVAL': 'Import evaluation data from a previous session',
    'OPEN_FINAL_REPORT': 'Generate the sample report',
    'BTN_SAVE_HTML': 'Download the evaluation report (HTML)',
    'BTN_SAVE_JSON': 'Download the evaluation data (JSON)',
    'BTN_EXPAND_PAGES': 'Show results for individual web pages',
    'BTN_COLLAPSE_PAGES': 'Hide results for individual web pages',
    'BTN_LOAD_FILE': 'Load data file',
    'BTN_DOWNLOAD_DATA_FILE': 'Download and save',
    'BTN_BACK_TO_EVAL': 'Back',
    'PREV_STEP': 'Previous step',
    'NEXT_STEP': 'Next step'
  });
  $translateProvider.preferredLanguage('en');
});
