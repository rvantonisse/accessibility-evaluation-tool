<!--
 * @component
 *   Report
 * -->
<div tabindex="-1" bind:this="{sectionAbout}">
  <h2>{TRANSLATED.HEADING_ABOUT}</h2>
  <dl>
    <dt>
      <ReportHeaderKey editing="{editAbout}" field="EVALUATION_CREATOR">
        {TRANSLATED.LABEL_EVALUATOR}
      </ReportHeaderKey>
    </dt>
    <dd>
      <ReportHeaderValue
        editing="{editAbout}"
        field="EVALUATION_CREATOR"
        store="summaryStore"
      />
    </dd>

    <dt>
      <ReportHeaderKey editing="{editAbout}" field="EVALUATION_COMMISSIONER">
        {TRANSLATED.LABEL_COMMISSIONER}
      </ReportHeaderKey>
    </dt>
    <dd>
      <ReportHeaderValue
        editing="{editAbout}"
        field="EVALUATION_COMMISSIONER"
        store="summaryStore"
      />
    </dd>

    <dt>
      <ReportHeaderKey editing="{editAbout}" field="EVALUATION_DATE">
        {TRANSLATED.LABEL_DATE}
      </ReportHeaderKey>
    </dt>
    <dd>
      <ReportHeaderValue
        editing="{editAbout}"
        field="EVALUATION_DATE"
        store="summaryStore"
      />
    </dd>
  </dl>

  {#if editAbout}
    <Button small on:click="{toggleEditAbout}">
      {TRANSLATED.BUTTON_SAVE}
      <span class="visually-hidden">{TRANSLATED.HEADING_ABOUT}</span>
    </Button>
  {:else}
    <Button small on:click="{toggleEditAbout}">
      {TRANSLATED.BUTTON_EDIT}
      <span class="visually-hidden">{TRANSLATED.HEADING_ABOUT}</span>
    </Button>
  {/if}
</div>

<div tabindex="-1" bind:this="{sectionExecutiveSummary}">
  <h2>{TRANSLATED.HEADING_SUMMARY}</h2>
  {#if editExecutiveSummary}
    <div>
      <ReportHeaderValue
        editing="{editExecutiveSummary}"
        multiline="{true}"
        field="EVALUATION_SUMMARY"
        store="summaryStore"
      />
    </div>
    <Button small on:click="{toggleEditExecutiveSummary}">
      {TRANSLATED.BUTTON_SAVE}
      <span class="visually-hidden">{TRANSLATED.HEADING_SUMMARY}</span>
    </Button>
  {:else}
    <div>
      {#if $summaryStore['EVALUATION_SUMMARY']}
        {@html marked($summaryStore['EVALUATION_SUMMARY'])}
      {:else}<span class="no-result">{TRANSLATED.LABEL_NOT_PROVIDED}</span>{/if}
    </div>
    <Button small on:click="{toggleEditExecutiveSummary}">
      {TRANSLATED.BUTTON_EDIT}
      <span class="visually-hidden">{TRANSLATED.HEADING_SUMMARY}</span>
    </Button>
  {/if}
</div>

<div tabindex="-1" bind:this="{sectionEvaluationScope}">
  <h2>{TRANSLATED.HEADING_SCOPE}</h2>
  <dl>
    <dt>
      <ReportHeaderKey editing="{editEvaluationScope}" field="SITE_NAME">
        {TRANSLATED.LABEL_WEBSITE_NAME}
      </ReportHeaderKey>
    </dt>
    <dd>
      <ReportHeaderValue
        editing="{editEvaluationScope}"
        field="SITE_NAME"
        store="scopeStore"
      />
    </dd>

    <dt>
      <ReportHeaderKey editing="{editEvaluationScope}" field="WEBSITE_SCOPE">
        {TRANSLATED.LABEL_WEBSITE_SCOPE}
      </ReportHeaderKey>
    </dt>
    <dd>
      <ReportHeaderValue
        editing="{editEvaluationScope}"
        field="WEBSITE_SCOPE"
        store="scopeStore"
        multiline="{true}"
      />
    </dd>

    <dt>
      <ReportHeaderKey editing="{editEvaluationScope}" field="WCAG_VERSION">
        {TRANSLATED.LABEL_WCAG_VERSION}
      </ReportHeaderKey>
    </dt>
    <dd>
      <ReportHeaderMultiValue
        editing="{editEvaluationScope}"
        field="WCAG_VERSION"
        store="scopeStore"
        options="{wcagVersions}"
      />
    </dd>

    <dt>
      <ReportHeaderKey
        editing="{editEvaluationScope}"
        field="CONFORMANCE_TARGET"
      >
        {TRANSLATED.LABEL_CONFORMANCE_TARGET}
      </ReportHeaderKey>
    </dt>
    <dd>
      <ReportHeaderMultiValue
        editing="{editEvaluationScope}"
        field="CONFORMANCE_TARGET"
        store="scopeStore"
        options="{conformanceLevels}"
      />
    </dd>

    <dt>
      <ReportHeaderKey editing="{editEvaluationScope}" field="AS_BASELINE">
        {TRANSLATED.LABEL_ACCESSIBILITY_SUPPORT_BASELINE}
      </ReportHeaderKey>
    </dt>
    <dd>
      <ReportHeaderValue
        editing="{editEvaluationScope}"
        field="AS_BASELINE"
        store="scopeStore"
        multiline="{true}"
      />
    </dd>

    <dt>
      <ReportHeaderKey
        editing="{editEvaluationScope}"
        field="ADDITIONAL_REQUIREMENTS"
      >
        {TRANSLATED.LABEL_EXTRA_REQUIREMENTS}
      </ReportHeaderKey>
    </dt>
    <dd>
      <ReportHeaderValue
        editing="{editEvaluationScope}"
        field="ADDITIONAL_REQUIREMENTS"
        store="scopeStore"
        multiline="{true}"
      />
    </dd>
  </dl>

  {#if editEvaluationScope}
    <Button small on:click="{toggleEditEvaluationScope}">
      {TRANSLATED.BUTTON_SAVE}
      <span class="visually-hidden">{TRANSLATED.HEADING_SCOPE}</span>
    </Button>
  {:else}
    <Button small on:click="{toggleEditEvaluationScope}">
      {TRANSLATED.BUTTON_EDIT}
      <span class="visually-hidden">{TRANSLATED.HEADING_SCOPE}</span>
    </Button>
  {/if}
</div>

<h2>{TRANSLATED.HEADING_AUDIT_RESULTS_DETAIL}</h2>

<h3>{TRANSLATED.SUMMARY}</h3>
<ReportSummary />

<h3>{TRANSLATED.ALL_RESULTS}</h3>
<ReportAllResults criteria="{$wcag}" />

<h2>{TRANSLATED.HEADING_SAMPLE}</h2>
{#if report.samples.length > 0}
  <ol>
    {#each report.samples as sample}
      <li><span>{sample.title}</span> - <span>{sample.description}</span></li>
    {/each}
  </ol>
{:else}
  <p>{TRANSLATED.TEXT_NO_SAMPLE}</p>
{/if}

<h2>{TRANSLATED.LABEL_TECH}</h2>
{#if report.tech != ''}
  <p>{report.tech}</p>
{:else}
  <p>{TRANSLATED.LABEL_NOT_PROVIDED}</p>
{/if}

<h2>{TRANSLATED.HEADING_SPECIFICS}</h2>
<p>
  {@html marked(report.specifics) || TRANSLATED.LABEL_NOT_PROVIDED}
</p>

<h2 class="strip">{TRANSLATED.HEADING_RESOURCES}</h2>
<ul class="strip">
  <li>
    <a href="https://www.w3.org/WAI/intro/wcag"
      >Web Content Accessibility Guidelines (WCAG) Overview</a
    >
  </li>
  <li>
    <a href="https://www.w3.org/WAI/WCAG21/quickref/"
      >How to Meet WCAG 2.1 Quick Reference</a
    >
  </li>
  <li>
    <a href="https://www.w3.org/WAI/eval/conformance"
      >WCAG Evaluation Methodology (WCAG-EM) Overview</a
    >
  </li>
</ul>

<!-- /component -->

<style>
  /* REMOVED */
</style>

<script>
  import { getContext } from 'svelte';
  import marked from 'marked';

  import {
    wcag,
    CONFORMANCE_LEVELS,
    WCAG_VERSIONS
  } from '@app/stores/wcagStore.js';

  import Button from '@app/components/ui/Button/Button.svelte';
  import ReportAllResults from '@app/components/ui/Report/ReportAllResults.svelte';
  import ReportHeaderKey from '@app/components/ui/Report/ReportHeaderKey.svelte';
  import ReportHeaderValue from '@app/components/ui/Report/ReportHeaderValue.svelte';
  import ReportHeaderMultiValue from '@app/components/ui/Report/ReportHeaderMultiValue.svelte';
  import ReportSummary from './Report/ReportSummary.svelte';

  const { sampleStore, summaryStore, exploreStore, translate } =
    getContext('app');

  let editAbout = false;
  let editExecutiveSummary = false;
  let editEvaluationScope = false;
  let sectionAbout, sectionEvaluationScope, sectionExecutiveSummary;

  $: TRANSLATED = {
    LABEL_EVALUATOR: $translate('UI.REPORT.BY'),
    LABEL_COMMISSIONER: $translate('UI.REPORT.COMMISION_BY'),
    LABEL_NOT_PROVIDED: $translate('UI.REPORT.LABEL_NOT_PROVIDED'),
    LABEL_DATE: $translate('PAGES.SUMMARY.LABEL_DATE'),
    BUTTON_SAVE: $translate('UI.REPORT.SAVE'),
    BUTTON_EDIT: $translate('UI.REPORT.EDIT'),
    HEADING_ABOUT: $translate('UI.REPORT.HD_ABOUT'),
    HEADING_SUMMARY: $translate('UI.REPORT.HD_SUMMARY'),
    HEADING_SCOPE: $translate('UI.REPORT.HD_SCOPE'),
    LABEL_WEBSITE_NAME: $translate('PAGES.SCOPE.LABEL_SITE_NAME'),
    LABEL_WEBSITE_SCOPE: $translate('PAGES.SCOPE.LABEL_SITE_SCOPE'),
    LABEL_WCAG_VERSION: $translate('PAGES.SCOPE.LABEL_WCAG_VERSION'),
    LABEL_CONFORMANCE_TARGET: $translate('PAGES.SCOPE.LABEL_CONFORMANCE_TGT'),
    LABEL_EXTRA_REQUIREMENTS: $translate(
      'PAGES.SCOPE.LABEL_EXTRA_REQUIREMENTS'
    ),
    LABEL_ACCESSIBILITY_SUPPORT_BASELINE: $translate(
      'PAGES.SCOPE.LABEL_SUPPORT_BASE'
    ),
    HEADING_AUDIT_RESULTS_OVERVIEW: $translate('UI.REPORT.HD_SCORE'),
    HEADING_AUDIT_RESULTS_DETAIL: $translate('UI.REPORT.HD_CRITERIA_REPORT'),
    HEADING_SAMPLE: $translate('UI.REPORT.HD_SAMPLE'),
    HEADING_SPECIFICS: $translate('UI.REPORT.HD_SPECIFICS'),
    HEADING_RESOURCES: $translate('UI.REPORT.HD_DOCS'),
    CONFORMANCE_LEVEL: $translate('WCAG.COMMON.CONFORMANCE_LEVEL'),
    TEXT_NO_SAMPLE: $translate('PAGES.AUDIT.NO_SAMPLE'),
    SUMMARY: $translate('UI.REPORT.SUMMARY'),
    ALL_RESULTS: $translate('UI.REPORT.ALL_RESULTS'),
    LABEL_TECH: $translate('PAGES.EXPLORE.LABEL_TECH')
  };

  $: report = {
    commissioner: $summaryStore['EVALUATION_COMMISSIONER'],
    creator: $summaryStore['EVALUATION_CREATOR'],
    date: $summaryStore['EVALUATION_DATE'],
    samples: [
      ...$sampleStore['STRUCTURED_SAMPLE'],
      ...$sampleStore['RANDOM_SAMPLE']
    ],
    specifics: $summaryStore['EVALUATION_SPECIFICS'],
    summary: $summaryStore['EVALUATION_SUMMARY'],
    title:
      $summaryStore['EVALUATION_TITLE'] || $translate('PAGES.REPORT.TITLE'),
    tech: $exploreStore['TECHNOLOGIES_RELIED_UPON']
  };

  let wcagVersions = [...WCAG_VERSIONS].reverse().map((version) => {
    return {
      title: `WCAG ${version}`,
      value: version
    };
  });

  $: conformanceLevels = CONFORMANCE_LEVELS.map((level) => {
    return {
      title: `${TRANSLATED.CONFORMANCE_LEVEL} ${level}`,
      value: level
    };
  });

  function toggleEditAbout() {
    editAbout = !editAbout;
    sectionAbout.focus();
  }

  function toggleEditExecutiveSummary() {
    editExecutiveSummary = !editExecutiveSummary;
    sectionExecutiveSummary.focus();
  }

  function toggleEditEvaluationScope() {
    editEvaluationScope = !editEvaluationScope;
    sectionEvaluationScope.focus();
  }
</script>
