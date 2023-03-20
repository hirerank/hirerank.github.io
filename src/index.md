---
title: HireRank
layout: landing.njk
---

<div id="hero">
    <div class="hero-image">
        <div class="hero-text"><h1><span id="hero-verb">Looking for work</span> can be <span id="hero-term">&nbsp;a nightmare&nbsp;</span>.</br>
You can help us make it suck less.</h1></div>
    </div>
    <script>
        let v = document.getElementById('hero-verb');
        let t = document.getElementById('hero-term');
        let verbs = ["Looking for work", "Searching for a next gig", "Applying for a new job", "Interviews","Screening calls","Navigating job boards", "Applying for jobs","Working with recruiters"];
        let words = ["a nightmare","the worst","a pain","hell","pure toil","disorientating","a struggle","an uphill battle"];
        v.innerHTML = verbs[Math.floor(Math.random()*verbs.length)]
        t.innerHTML = `&nbsp;${words[Math.floor(Math.random()*words.length)]}&nbsp;`
    </script>
</div>

<div id="get-extension" class="em">
    <article>
        <h1>Get the browser extension</h1>
        <a href="https://chrome.google.com/webstore/detail/nbodnfcbgadbbolfalgfcndkklccbfef/preview?hl=en&authuser=0" target="_blank" class="chrome-store-button"><span>Available in the Chrome Web Store</span></a>
        <h2>Getting started is easy</h2>
        <ol>
            <li>Visit a recruiter's profile on LinkedIn.</li>
            <li>If they're awesome, give them credit!<br/>Not so great? Let everyone know.</li>
        </ol>
    <!--<p>Been sent you junk job descriptions, ghosted, or whatever the situation may have been.</p>-->
    </article>
</div>



<div>
    <article>
        <h1>So what's this all about?</h1>
        <p>Hiring isn't easy, but it shouldn't be hard on candidates. At HireRank we got tired of hearing stories about what people go through when they're looking for their next role. From getting ghosted, to spam calls and texts, to recruiters who just have no idea what they're doing, there's a lack of accountability in the hiring industry and the first thing to fix how hiring is done is to hold staffing professionals accountable for the reputation they deserve.</p>
        <p>Recruiters be warned, if you're fantastic or terrible at hiring, at HireRank we are going to make sure everybody knows about it.</p>
    </article>
</div>

<div class="mc-form">
    <article>
        <h1>Stay in the loop!</h1>
        <!-- Begin Mailchimp Signup Form -->
        <p>Once in a blue moon we send out emails about new features, or other stuff we have going on. Wi will never ever ever share your email with anyone. Our <a href="/privacy">Privacy Policy</a> has been written for your benefit, not ours.</p>
        <div id="mc_embed_signup" class="em">
            <form action="https://report.us20.list-manage.com/subscribe/post?u=455d34947bfdd62f54496d27f&id=105eaf57e4&f_id=008426e7f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
                    <label for="mce-EMAIL">You know how email forms work</label>
                    <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
                    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_455d34947bfdd62f54496d27f_105eaf57e4" tabindex="-1" value=""/></div>
                    <br/><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" />
                            <!--<p class="brandingLogo"><a href="http://eepurl.com/hS8x21" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p>--> 
                </div>
            </form>
        </div><!--End mc_embed_signup-->
    </article>
</div>

<div>
    <article>
        <h1>Are you a recruiter?</h1>
        <blockquote>
            <h2>If you're fantastic <em>(or terrible)</em> at hiring, HireRank will make sure every job seeker knows about it.</h2>
            <p><!-- We are first and foremost a candidate-advocacy startup.  -->Our mission is to enable all job seekers to have a good time while looking for work.</p>
            <p>If you think you've got what it takes to help us make hiring suck less for <em>everybody</em>, feel drop us a note at <a href="mailto:iwanttohelp@hirerank.cc">iwanttohelp@hirerank.cc</a> and tell us how.</p>
        </blockquote>
    </article>
</div>