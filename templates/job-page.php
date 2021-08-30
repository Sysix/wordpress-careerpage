<?php
$job = get_job_by_shorthandle(get_query_var('job'));
get_header();
?>

    <div id="primary" class="content-area">
        <main id="main" class="site-main">

            <div style="text-align: center;">
                <h2><?= $job->title ?></h2>
                <a href="#"><?= prescreeen_build_job_url($job); ?></a>
                Art der Anstellung: <span class="icon_positiontype"><?= $job->positiontype ?></span>
                Standort: <span class="icon_city"><?= $job->city ?></span>
                Berufserfahrung: <span style="font-weight: 500;"><?= $job->seniority ?></span>
                <img src="<?= $job->bannerurl ?>" alt="">
                Beschreibung:
                <span style="font-weight: 500;"><?= $job->simple_html_content ?></span>
            </div>
            <div class="job__button">
                <a href="<?= prescreeen_build_candidature_url($job)  ?>" class="button button--contained">Jetzt Bewerben</a>
            </div>
        </main><!-- #main -->
    </div><!-- #primary -->

<?php
get_footer();
