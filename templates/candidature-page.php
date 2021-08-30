<?php
$job = get_job_by_shorthandle(get_query_var('candidature'));
get_header();
?>

    <div id="primary" class="content-area">
        <main id="main" class="site-main">

            <?php
            $app_link = get_option('PS_career_applink');
            ?>
            <div class="mw-col__10--12 col__12--12 column" id="psJobWidget"></div>
            <script src="<?= $app_link ?>"></script>
        </main><!-- #main -->
    </div><!-- #primary -->

<?php
get_footer();
