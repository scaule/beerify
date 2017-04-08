<?php

/* base.html.twig */
class __TwigTemplate_9e9d032b72520dc3fffdef26d34d97c783bb32021ed89ee82804b4b2e44e4a03 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'stylesheets' => array($this, 'block_stylesheets'),
            'body' => array($this, 'block_body'),
            'javascripts' => array($this, 'block_javascripts'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_4db5a86ebed326c75679140da5453276dd27c09d16cff6ae1039fd63557a8edd = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_4db5a86ebed326c75679140da5453276dd27c09d16cff6ae1039fd63557a8edd->enter($__internal_4db5a86ebed326c75679140da5453276dd27c09d16cff6ae1039fd63557a8edd_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "base.html.twig"));

        $__internal_c41138cec8d751a37fda118f06e046121532998f768cf621ba925a76648ae6ed = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_c41138cec8d751a37fda118f06e046121532998f768cf621ba925a76648ae6ed->enter($__internal_c41138cec8d751a37fda118f06e046121532998f768cf621ba925a76648ae6ed_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "base.html.twig"));

        // line 1
        echo "<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset=\"utf-8\">
    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">

    <title>Brewing !!! </title>

    ";
        // line 12
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 17
        echo "
    <style>
        body { background: #F5F5F5; font: 18px/1.5 sans-serif; }
        h1, h2 { line-height: 1.2; margin: 0 0 .5em; }
        h1 { font-size: 36px; }
        h2 { font-size: 21px; margin-bottom: 1em; }
        p { margin: 0 0 1em 0; }
        a { color: #0000F0; }
        a:hover { text-decoration: none; }
        code { background: #F5F5F5; max-width: 100px; padding: 2px 6px; word-wrap: break-word; }
        #wrapper { background: #FFF; margin: 1em auto; max-width: 800px; width: 95%; }
        #container { padding: 2em; }
        #welcome, #status { margin-bottom: 2em; }
        #welcome h1 span { display: block; font-size: 75%; }
        #icon-status, #icon-book { float: left; height: 64px; margin-right: 1em; margin-top: -4px; width: 64px; }
        #icon-book { display: none; }

        @media (min-width: 768px) {
            #wrapper { width: 80%; margin: 2em auto; }
            #icon-book { display: inline-block; }
            #status a, #next a { display: block; }

            @-webkit-keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
            @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
            .sf-toolbar { opacity: 0; -webkit-animation: fade-in 1s .2s forwards; animation: fade-in 1s .2s forwards;}
        }
    </style>
</head>

<body class=\"nav-md\">
<div class=\"container body\">
    <div class=\"main_container\">
        <div class=\"col-md-3 left_col\">
            <div class=\"left_col scroll-view\">
                <div class=\"navbar nav_title\" style=\"border: 0;\">
                    <a href=\"index.html\" class=\"site_title\"><i class=\"fa fa-paw\"></i> <span>Brewing!</span></a>
                </div>

                <div class=\"clearfix\"></div>
                <br />

                <!-- sidebar menu -->
                <div id=\"sidebar-menu\" class=\"main_menu_side hidden-print main_menu\">
                    <div class=\"menu_section\">
                        <h3>General</h3>
                        <ul class=\"nav side-menu\">
                            <li><a><i class=\"fa fa-home\"></i> Home <span class=\"fa fa-chevron-down\"></span></a>
                                <ul class=\"nav child_menu\">
                                    <li><a href=\"";
        // line 65
        echo $this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getUrl("index");
        echo "\">Dashboard</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>
                <!-- /sidebar menu -->
            </div>
        </div>

        <!-- top navigation -->
        <div class=\"top_nav\">
            <div class=\"nav_menu\">
                <nav>
                    <div class=\"nav toggle\">
                        <a id=\"menu_toggle\"><i class=\"fa fa-bars\"></i></a>
                    </div>

                </nav>
            </div>
        </div>
        <!-- /top navigation -->

        <!-- page content -->
        <div class=\"right_col\" role=\"main\">
            ";
        // line 91
        $this->displayBlock('body', $context, $blocks);
        // line 93
        echo "        </div>
        <!-- /page content -->

        <!-- footer content -->
        <footer>
            <div class=\"pull-right\">
                My brewing
            </div>
            <div class=\"clearfix\"></div>
        </footer>
        <!-- /footer content -->
    </div>
</div>

";
        // line 107
        $this->displayBlock('javascripts', $context, $blocks);
        // line 117
        echo "
</body>
</html>";
        
        $__internal_4db5a86ebed326c75679140da5453276dd27c09d16cff6ae1039fd63557a8edd->leave($__internal_4db5a86ebed326c75679140da5453276dd27c09d16cff6ae1039fd63557a8edd_prof);

        
        $__internal_c41138cec8d751a37fda118f06e046121532998f768cf621ba925a76648ae6ed->leave($__internal_c41138cec8d751a37fda118f06e046121532998f768cf621ba925a76648ae6ed_prof);

    }

    // line 12
    public function block_stylesheets($context, array $blocks = array())
    {
        $__internal_9d09416cdc264083bfc49d1d96b9f9e1367ba97aa8eb47af3c9d813d6c30b6d3 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_9d09416cdc264083bfc49d1d96b9f9e1367ba97aa8eb47af3c9d813d6c30b6d3->enter($__internal_9d09416cdc264083bfc49d1d96b9f9e1367ba97aa8eb47af3c9d813d6c30b6d3_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "stylesheets"));

        $__internal_0dba95f23345eee4e290cf37e32678042b49a742d14c312788bfb53523fd8617 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_0dba95f23345eee4e290cf37e32678042b49a742d14c312788bfb53523fd8617->enter($__internal_0dba95f23345eee4e290cf37e32678042b49a742d14c312788bfb53523fd8617_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "stylesheets"));

        // line 13
        echo "        ";
        if (isset($context['assetic']['debug']) && $context['assetic']['debug']) {
            // asset "c5fff3c_0"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("_assetic_c5fff3c_0") : $this->env->getExtension('Symfony\Bridge\Twig\Extension\AssetExtension')->getAssetUrl("css/c5fff3c_part_1_bootstrap.min_1.css");
            // line 14
            echo "        <link rel=\"stylesheet\" href=\"";
            echo twig_escape_filter($this->env, ($context["asset_url"] ?? $this->getContext($context, "asset_url")), "html", null, true);
            echo "\" />
        ";
            // asset "c5fff3c_1"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("_assetic_c5fff3c_1") : $this->env->getExtension('Symfony\Bridge\Twig\Extension\AssetExtension')->getAssetUrl("css/c5fff3c_part_1_custom_2.css");
            echo "        <link rel=\"stylesheet\" href=\"";
            echo twig_escape_filter($this->env, ($context["asset_url"] ?? $this->getContext($context, "asset_url")), "html", null, true);
            echo "\" />
        ";
            // asset "c5fff3c_2"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("_assetic_c5fff3c_2") : $this->env->getExtension('Symfony\Bridge\Twig\Extension\AssetExtension')->getAssetUrl("css/c5fff3c_part_1_font-awesome.min_3.css");
            echo "        <link rel=\"stylesheet\" href=\"";
            echo twig_escape_filter($this->env, ($context["asset_url"] ?? $this->getContext($context, "asset_url")), "html", null, true);
            echo "\" />
        ";
            // asset "c5fff3c_3"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("_assetic_c5fff3c_3") : $this->env->getExtension('Symfony\Bridge\Twig\Extension\AssetExtension')->getAssetUrl("css/c5fff3c_part_1_nprogress_4.css");
            echo "        <link rel=\"stylesheet\" href=\"";
            echo twig_escape_filter($this->env, ($context["asset_url"] ?? $this->getContext($context, "asset_url")), "html", null, true);
            echo "\" />
        ";
        } else {
            // asset "c5fff3c"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("_assetic_c5fff3c") : $this->env->getExtension('Symfony\Bridge\Twig\Extension\AssetExtension')->getAssetUrl("css/c5fff3c.css");
            echo "        <link rel=\"stylesheet\" href=\"";
            echo twig_escape_filter($this->env, ($context["asset_url"] ?? $this->getContext($context, "asset_url")), "html", null, true);
            echo "\" />
        ";
        }
        unset($context["asset_url"]);
        // line 16
        echo "    ";
        
        $__internal_0dba95f23345eee4e290cf37e32678042b49a742d14c312788bfb53523fd8617->leave($__internal_0dba95f23345eee4e290cf37e32678042b49a742d14c312788bfb53523fd8617_prof);

        
        $__internal_9d09416cdc264083bfc49d1d96b9f9e1367ba97aa8eb47af3c9d813d6c30b6d3->leave($__internal_9d09416cdc264083bfc49d1d96b9f9e1367ba97aa8eb47af3c9d813d6c30b6d3_prof);

    }

    // line 91
    public function block_body($context, array $blocks = array())
    {
        $__internal_8f0a9e9ed9b03a4d572ade782b394756868c18728114d8f9730de5b21d13eed8 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_8f0a9e9ed9b03a4d572ade782b394756868c18728114d8f9730de5b21d13eed8->enter($__internal_8f0a9e9ed9b03a4d572ade782b394756868c18728114d8f9730de5b21d13eed8_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        $__internal_7774581ae476ae2fe0e733f07464b2943d0b3f2abbca4a8ebe33db07e0f6dd46 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_7774581ae476ae2fe0e733f07464b2943d0b3f2abbca4a8ebe33db07e0f6dd46->enter($__internal_7774581ae476ae2fe0e733f07464b2943d0b3f2abbca4a8ebe33db07e0f6dd46_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        // line 92
        echo "            ";
        
        $__internal_7774581ae476ae2fe0e733f07464b2943d0b3f2abbca4a8ebe33db07e0f6dd46->leave($__internal_7774581ae476ae2fe0e733f07464b2943d0b3f2abbca4a8ebe33db07e0f6dd46_prof);

        
        $__internal_8f0a9e9ed9b03a4d572ade782b394756868c18728114d8f9730de5b21d13eed8->leave($__internal_8f0a9e9ed9b03a4d572ade782b394756868c18728114d8f9730de5b21d13eed8_prof);

    }

    // line 107
    public function block_javascripts($context, array $blocks = array())
    {
        $__internal_eb931e0344652d81bee35ed0479530cf7b4037c5f955eea672f5d99e35a88011 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_eb931e0344652d81bee35ed0479530cf7b4037c5f955eea672f5d99e35a88011->enter($__internal_eb931e0344652d81bee35ed0479530cf7b4037c5f955eea672f5d99e35a88011_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_036de3fbb85096df117d62aeff5238f42247d53ffd3af46f25fa204bc15dc9e7 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_036de3fbb85096df117d62aeff5238f42247d53ffd3af46f25fa204bc15dc9e7->enter($__internal_036de3fbb85096df117d62aeff5238f42247d53ffd3af46f25fa204bc15dc9e7_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "javascripts"));

        // line 108
        echo "    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.js\"></script>
    <script src=\"https://code.jquery.com/jquery-3.1.1.min.js\"
            integrity=\"sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=\"
            crossorigin=\"anonymous\"></script>
    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>
    ";
        // line 113
        if (isset($context['assetic']['debug']) && $context['assetic']['debug']) {
            // asset "c3c4a15_0"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("_assetic_c3c4a15_0") : $this->env->getExtension('Symfony\Bridge\Twig\Extension\AssetExtension')->getAssetUrl("js/c3c4a15_part_1_Chart.min_1.js");
            // line 114
            echo "        <script src=\"";
            echo twig_escape_filter($this->env, ($context["asset_url"] ?? $this->getContext($context, "asset_url")), "html", null, true);
            echo "\"></script>
    ";
            // asset "c3c4a15_1"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("_assetic_c3c4a15_1") : $this->env->getExtension('Symfony\Bridge\Twig\Extension\AssetExtension')->getAssetUrl("js/c3c4a15_part_1_custom_2.js");
            echo "        <script src=\"";
            echo twig_escape_filter($this->env, ($context["asset_url"] ?? $this->getContext($context, "asset_url")), "html", null, true);
            echo "\"></script>
    ";
            // asset "c3c4a15_2"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("_assetic_c3c4a15_2") : $this->env->getExtension('Symfony\Bridge\Twig\Extension\AssetExtension')->getAssetUrl("js/c3c4a15_part_1_date_3.js");
            echo "        <script src=\"";
            echo twig_escape_filter($this->env, ($context["asset_url"] ?? $this->getContext($context, "asset_url")), "html", null, true);
            echo "\"></script>
    ";
            // asset "c3c4a15_3"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("_assetic_c3c4a15_3") : $this->env->getExtension('Symfony\Bridge\Twig\Extension\AssetExtension')->getAssetUrl("js/c3c4a15_part_1_daterangepicker_4.js");
            echo "        <script src=\"";
            echo twig_escape_filter($this->env, ($context["asset_url"] ?? $this->getContext($context, "asset_url")), "html", null, true);
            echo "\"></script>
    ";
            // asset "c3c4a15_4"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("_assetic_c3c4a15_4") : $this->env->getExtension('Symfony\Bridge\Twig\Extension\AssetExtension')->getAssetUrl("js/c3c4a15_part_1_fastclick_5.js");
            echo "        <script src=\"";
            echo twig_escape_filter($this->env, ($context["asset_url"] ?? $this->getContext($context, "asset_url")), "html", null, true);
            echo "\"></script>
    ";
            // asset "c3c4a15_5"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("_assetic_c3c4a15_5") : $this->env->getExtension('Symfony\Bridge\Twig\Extension\AssetExtension')->getAssetUrl("js/c3c4a15_part_1_jquery.sparkline.min_6.js");
            echo "        <script src=\"";
            echo twig_escape_filter($this->env, ($context["asset_url"] ?? $this->getContext($context, "asset_url")), "html", null, true);
            echo "\"></script>
    ";
            // asset "c3c4a15_6"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("_assetic_c3c4a15_6") : $this->env->getExtension('Symfony\Bridge\Twig\Extension\AssetExtension')->getAssetUrl("js/c3c4a15_part_1_main_7.js");
            echo "        <script src=\"";
            echo twig_escape_filter($this->env, ($context["asset_url"] ?? $this->getContext($context, "asset_url")), "html", null, true);
            echo "\"></script>
    ";
            // asset "c3c4a15_7"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("_assetic_c3c4a15_7") : $this->env->getExtension('Symfony\Bridge\Twig\Extension\AssetExtension')->getAssetUrl("js/c3c4a15_part_1_moment.min_8.js");
            echo "        <script src=\"";
            echo twig_escape_filter($this->env, ($context["asset_url"] ?? $this->getContext($context, "asset_url")), "html", null, true);
            echo "\"></script>
    ";
            // asset "c3c4a15_8"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("_assetic_c3c4a15_8") : $this->env->getExtension('Symfony\Bridge\Twig\Extension\AssetExtension')->getAssetUrl("js/c3c4a15_part_1_nprogress_9.js");
            echo "        <script src=\"";
            echo twig_escape_filter($this->env, ($context["asset_url"] ?? $this->getContext($context, "asset_url")), "html", null, true);
            echo "\"></script>
    ";
        } else {
            // asset "c3c4a15"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("_assetic_c3c4a15") : $this->env->getExtension('Symfony\Bridge\Twig\Extension\AssetExtension')->getAssetUrl("js/c3c4a15.js");
            echo "        <script src=\"";
            echo twig_escape_filter($this->env, ($context["asset_url"] ?? $this->getContext($context, "asset_url")), "html", null, true);
            echo "\"></script>
    ";
        }
        unset($context["asset_url"]);
        
        $__internal_036de3fbb85096df117d62aeff5238f42247d53ffd3af46f25fa204bc15dc9e7->leave($__internal_036de3fbb85096df117d62aeff5238f42247d53ffd3af46f25fa204bc15dc9e7_prof);

        
        $__internal_eb931e0344652d81bee35ed0479530cf7b4037c5f955eea672f5d99e35a88011->leave($__internal_eb931e0344652d81bee35ed0479530cf7b4037c5f955eea672f5d99e35a88011_prof);

    }

    public function getTemplateName()
    {
        return "base.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  249 => 114,  245 => 113,  238 => 108,  229 => 107,  219 => 92,  210 => 91,  200 => 16,  168 => 14,  163 => 13,  154 => 12,  142 => 117,  140 => 107,  124 => 93,  122 => 91,  93 => 65,  43 => 17,  41 => 12,  28 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset=\"utf-8\">
    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">

    <title>Brewing !!! </title>

    {% block stylesheets %}
        {% stylesheets '@BrewingBundle/Resources/public/css/*' filter='cssrewrite' %}
        <link rel=\"stylesheet\" href=\"{{ asset_url }}\" />
        {% endstylesheets %}
    {% endblock %}

    <style>
        body { background: #F5F5F5; font: 18px/1.5 sans-serif; }
        h1, h2 { line-height: 1.2; margin: 0 0 .5em; }
        h1 { font-size: 36px; }
        h2 { font-size: 21px; margin-bottom: 1em; }
        p { margin: 0 0 1em 0; }
        a { color: #0000F0; }
        a:hover { text-decoration: none; }
        code { background: #F5F5F5; max-width: 100px; padding: 2px 6px; word-wrap: break-word; }
        #wrapper { background: #FFF; margin: 1em auto; max-width: 800px; width: 95%; }
        #container { padding: 2em; }
        #welcome, #status { margin-bottom: 2em; }
        #welcome h1 span { display: block; font-size: 75%; }
        #icon-status, #icon-book { float: left; height: 64px; margin-right: 1em; margin-top: -4px; width: 64px; }
        #icon-book { display: none; }

        @media (min-width: 768px) {
            #wrapper { width: 80%; margin: 2em auto; }
            #icon-book { display: inline-block; }
            #status a, #next a { display: block; }

            @-webkit-keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
            @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
            .sf-toolbar { opacity: 0; -webkit-animation: fade-in 1s .2s forwards; animation: fade-in 1s .2s forwards;}
        }
    </style>
</head>

<body class=\"nav-md\">
<div class=\"container body\">
    <div class=\"main_container\">
        <div class=\"col-md-3 left_col\">
            <div class=\"left_col scroll-view\">
                <div class=\"navbar nav_title\" style=\"border: 0;\">
                    <a href=\"index.html\" class=\"site_title\"><i class=\"fa fa-paw\"></i> <span>Brewing!</span></a>
                </div>

                <div class=\"clearfix\"></div>
                <br />

                <!-- sidebar menu -->
                <div id=\"sidebar-menu\" class=\"main_menu_side hidden-print main_menu\">
                    <div class=\"menu_section\">
                        <h3>General</h3>
                        <ul class=\"nav side-menu\">
                            <li><a><i class=\"fa fa-home\"></i> Home <span class=\"fa fa-chevron-down\"></span></a>
                                <ul class=\"nav child_menu\">
                                    <li><a href=\"{{ url('index') }}\">Dashboard</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>
                <!-- /sidebar menu -->
            </div>
        </div>

        <!-- top navigation -->
        <div class=\"top_nav\">
            <div class=\"nav_menu\">
                <nav>
                    <div class=\"nav toggle\">
                        <a id=\"menu_toggle\"><i class=\"fa fa-bars\"></i></a>
                    </div>

                </nav>
            </div>
        </div>
        <!-- /top navigation -->

        <!-- page content -->
        <div class=\"right_col\" role=\"main\">
            {% block body %}
            {% endblock %}
        </div>
        <!-- /page content -->

        <!-- footer content -->
        <footer>
            <div class=\"pull-right\">
                My brewing
            </div>
            <div class=\"clearfix\"></div>
        </footer>
        <!-- /footer content -->
    </div>
</div>

{% block javascripts %}
    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.js\"></script>
    <script src=\"https://code.jquery.com/jquery-3.1.1.min.js\"
            integrity=\"sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=\"
            crossorigin=\"anonymous\"></script>
    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>
    {% javascripts '@BrewingBundle/Resources/public/js/*' %}
        <script src=\"{{ asset_url }}\"></script>
    {% endjavascripts %}
{% endblock %}

</body>
</html>", "base.html.twig", "/Users/scaule/MyProject/brew-manager/brew-front/app/Resources/views/base.html.twig");
    }
}
