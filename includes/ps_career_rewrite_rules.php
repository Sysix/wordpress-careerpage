<?php

function prescreeen_build_job_url($job)
{
    return get_option('PS_career_mainjoburl') . $job->shorthandle . '/' . sanitize_title($job->title);
}

function prescreeen_build_candidature_url($job)
{
    return get_site_url() . '/jobs/bewerben/' . $job->shorthandle . '/' . sanitize_title($job->title);
}

function prescreen_career_add_job_filter($vars)
{
    $vars[] = 'job';
    $vars[] = 'job_title';

    $vars[] = 'candidature';
    $vars[] = 'candidature_title';
    return $vars;
}

add_filter('query_vars', 'prescreen_career_add_job_filter');

function prescreen_career_add_rewrite_rules()
{
    $base = ltrim(str_replace(
        get_site_url(),
        '',
        get_option('PS_career_mainjoburl')
    ), '/');

    add_rewrite_rule(
        '^' . $base . '([^/]+)/([^/]+)/?$',
        'index.php?job=$matches[1]&job_title=$matches[2]',
        'top'
    );

    $base = 'jobs/bewerben/';

    add_rewrite_rule(
        '^' . $base . '([^/]+)/([^/]+)/?$',
        'index.php?candidature=$matches[1]&candidature_title=$matches[2]',
        'top'
    );
}

add_action('init', 'prescreen_career_add_rewrite_rules');

add_action('template_include', function ($template) {
    if (get_query_var('job')) {
        $job = get_job_by_shorthandle(get_query_var('job'));

        if ($job) {
            $template = locate_template([
                'job-page-' . $job->id . '.php',
                'job-page-template-' . $job->template . '.php',
                'job-page.php'
            ]);

            if (!$template) {
                $template = __DIR__ . '/../templates/job-page.php';
            }
        }
    } elseif (get_query_var('candidature')) {
        $job = get_job_by_shorthandle(get_query_var('candidature'));

        if ($job) {
            $template = locate_template([
                'candidature-page-' . $job->id . '.php',
                'candidature-page-template-' . $job->template . '.php',
                'candidature-page.php'
            ]);

            if (!$template) {
                $template = __DIR__ . '/../templates/candidature-page.php';
            }
        }
    }

    return $template;
});