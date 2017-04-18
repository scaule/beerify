<?php

/* GuzzleBundle::debug.html.twig */
class __TwigTemplate_f04576af00b8aeab07ef2f676e77c35f074c9065d3881febe8a127d694f80aeb extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("WebProfilerBundle:Profiler:layout.html.twig", "GuzzleBundle::debug.html.twig", 1);
        $this->blocks = array(
            'toolbar' => array($this, 'block_toolbar'),
            'menu' => array($this, 'block_menu'),
            'head' => array($this, 'block_head'),
            'panel' => array($this, 'block_panel'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "WebProfilerBundle:Profiler:layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_70c092df939f26b47e39b0426cdce760fc7a23759289603e9e93f470bec339de = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_70c092df939f26b47e39b0426cdce760fc7a23759289603e9e93f470bec339de->enter($__internal_70c092df939f26b47e39b0426cdce760fc7a23759289603e9e93f470bec339de_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "GuzzleBundle::debug.html.twig"));

        $__internal_12138702d46ee7d1cb83cf3aab48eef60cde531b18628136d34130b1dc54f7aa = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_12138702d46ee7d1cb83cf3aab48eef60cde531b18628136d34130b1dc54f7aa->enter($__internal_12138702d46ee7d1cb83cf3aab48eef60cde531b18628136d34130b1dc54f7aa_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "GuzzleBundle::debug.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_70c092df939f26b47e39b0426cdce760fc7a23759289603e9e93f470bec339de->leave($__internal_70c092df939f26b47e39b0426cdce760fc7a23759289603e9e93f470bec339de_prof);

        
        $__internal_12138702d46ee7d1cb83cf3aab48eef60cde531b18628136d34130b1dc54f7aa->leave($__internal_12138702d46ee7d1cb83cf3aab48eef60cde531b18628136d34130b1dc54f7aa_prof);

    }

    // line 4
    public function block_toolbar($context, array $blocks = array())
    {
        $__internal_de1286b5f70d75be1aa59005bae351a58661b172806207b270ef9ad08f8e94cd = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_de1286b5f70d75be1aa59005bae351a58661b172806207b270ef9ad08f8e94cd->enter($__internal_de1286b5f70d75be1aa59005bae351a58661b172806207b270ef9ad08f8e94cd_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "toolbar"));

        $__internal_ed51ba51b35b594a247547f15adb2546a94a7000f022d306b69a7a9bd146f00b = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_ed51ba51b35b594a247547f15adb2546a94a7000f022d306b69a7a9bd146f00b->enter($__internal_ed51ba51b35b594a247547f15adb2546a94a7000f022d306b69a7a9bd146f00b_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "toolbar"));

        // line 5
        echo "    ";
        if ($this->getAttribute(($context["collector"] ?? $this->getContext($context, "collector")), "callCount", array())) {
            // line 6
            echo "        ";
            if ($this->getAttribute(($context["collector"] ?? $this->getContext($context, "collector")), "errorCount", array())) {
                // line 7
                echo "            ";
                $context["color"] = "red";
                // line 8
                echo "        ";
            } else {
                // line 9
                echo "            ";
                $context["color"] = "green";
                // line 10
                echo "        ";
            }
            // line 11
            echo "
        ";
            // line 12
            ob_start();
            // line 13
            echo "            ";
            echo twig_include($this->env, $context, "@Guzzle/Icons/logo.svg.twig");
            echo "
            <span class=\"sf-toolbar-status sf-toolbar-status-";
            // line 14
            echo twig_escape_filter($this->env, ($context["color"] ?? $this->getContext($context, "color")), "html", null, true);
            echo "\">
                ";
            // line 15
            echo twig_escape_filter($this->env, $this->getAttribute(($context["collector"] ?? $this->getContext($context, "collector")), "callCount", array()), "html", null, true);
            echo "
            </span>
        ";
            $context["icon"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
            // line 18
            echo "
        ";
            // line 19
            ob_start();
            // line 20
            echo "
            <div class=\"sf-toolbar-info-piece\">
                <b>API Calls</b>
                <span>";
            // line 23
            echo twig_escape_filter($this->env, $this->getAttribute(($context["collector"] ?? $this->getContext($context, "collector")), "callCount", array()), "html", null, true);
            echo "</span>
            </div>

            <div class=\"sf-toolbar-info-piece\">
                <b>Total time</b>
                ";
            // line 28
            if (($this->getAttribute(($context["collector"] ?? $this->getContext($context, "collector")), "totalTime", array()) > 1)) {
                // line 29
                echo "                    <span>";
                echo twig_escape_filter($this->env, sprintf("%0.2f", $this->getAttribute(($context["collector"] ?? $this->getContext($context, "collector")), "totalTime", array())), "html", null, true);
                echo " s</span>
                ";
            } else {
                // line 31
                echo "                    <span>";
                echo twig_escape_filter($this->env, sprintf("%0.0f", ($this->getAttribute(($context["collector"] ?? $this->getContext($context, "collector")), "totalTime", array()) * 1000)), "html", null, true);
                echo " ms</span>
                ";
            }
            // line 33
            echo "            </div>
        ";
            $context["text"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
            // line 35
            echo "
        ";
            // line 36
            $this->loadTemplate("WebProfilerBundle:Profiler:toolbar_item.html.twig", "GuzzleBundle::debug.html.twig", 36)->display(array_merge($context, array("link" => ($context["profiler_url"] ?? $this->getContext($context, "profiler_url")))));
            // line 37
            echo "    ";
        }
        
        $__internal_ed51ba51b35b594a247547f15adb2546a94a7000f022d306b69a7a9bd146f00b->leave($__internal_ed51ba51b35b594a247547f15adb2546a94a7000f022d306b69a7a9bd146f00b_prof);

        
        $__internal_de1286b5f70d75be1aa59005bae351a58661b172806207b270ef9ad08f8e94cd->leave($__internal_de1286b5f70d75be1aa59005bae351a58661b172806207b270ef9ad08f8e94cd_prof);

    }

    // line 41
    public function block_menu($context, array $blocks = array())
    {
        $__internal_ce12485dbb1da48b9191cef4acdf3b443a60bbd932e0533585645bbbb83ec9f2 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_ce12485dbb1da48b9191cef4acdf3b443a60bbd932e0533585645bbbb83ec9f2->enter($__internal_ce12485dbb1da48b9191cef4acdf3b443a60bbd932e0533585645bbbb83ec9f2_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        $__internal_5947be415160add79aded64117998e7f5dc6ec4a577908bd3407ad3d66e79fbd = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_5947be415160add79aded64117998e7f5dc6ec4a577908bd3407ad3d66e79fbd->enter($__internal_5947be415160add79aded64117998e7f5dc6ec4a577908bd3407ad3d66e79fbd_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        // line 42
        echo "
    <span class=\"label\">
        <span class=\"icon\">
            ";
        // line 45
        echo twig_include($this->env, $context, "@Guzzle/Icons/logo.svg.twig");
        echo "
        </span>
        <strong>Guzzle</strong>
        <span class=\"count\">
            <span>";
        // line 49
        echo twig_escape_filter($this->env, $this->getAttribute(($context["collector"] ?? $this->getContext($context, "collector")), "callCount", array()), "html", null, true);
        echo "</span>
        </span>
    </span>
";
        
        $__internal_5947be415160add79aded64117998e7f5dc6ec4a577908bd3407ad3d66e79fbd->leave($__internal_5947be415160add79aded64117998e7f5dc6ec4a577908bd3407ad3d66e79fbd_prof);

        
        $__internal_ce12485dbb1da48b9191cef4acdf3b443a60bbd932e0533585645bbbb83ec9f2->leave($__internal_ce12485dbb1da48b9191cef4acdf3b443a60bbd932e0533585645bbbb83ec9f2_prof);

    }

    // line 55
    public function block_head($context, array $blocks = array())
    {
        $__internal_c2b0619d7a041d116dd5a13506aac781acc4d29f919e39b8d1504193dd0229f2 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_c2b0619d7a041d116dd5a13506aac781acc4d29f919e39b8d1504193dd0229f2->enter($__internal_c2b0619d7a041d116dd5a13506aac781acc4d29f919e39b8d1504193dd0229f2_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

        $__internal_5841453426cfbd5da45a14e62d500e9475afd64ef2b30a85054ce4249fb9f7e9 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_5841453426cfbd5da45a14e62d500e9475afd64ef2b30a85054ce4249fb9f7e9->enter($__internal_5841453426cfbd5da45a14e62d500e9475afd64ef2b30a85054ce4249fb9f7e9_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

        // line 56
        echo "
    ";
        // line 57
        $this->displayParentBlock("head", $context, $blocks);
        echo "

    <link rel=\"stylesheet\" href=\"";
        // line 59
        echo twig_escape_filter($this->env, $this->env->getExtension('Symfony\Bridge\Twig\Extension\AssetExtension')->getAssetUrl("bundles/guzzle/css/main.css"), "html", null, true);
        echo "\" />
    <script src=\"";
        // line 60
        echo twig_escape_filter($this->env, $this->env->getExtension('Symfony\Bridge\Twig\Extension\AssetExtension')->getAssetUrl("bundles/guzzle/js/jquery.min.js"), "html", null, true);
        echo "\"></script>
";
        
        $__internal_5841453426cfbd5da45a14e62d500e9475afd64ef2b30a85054ce4249fb9f7e9->leave($__internal_5841453426cfbd5da45a14e62d500e9475afd64ef2b30a85054ce4249fb9f7e9_prof);

        
        $__internal_c2b0619d7a041d116dd5a13506aac781acc4d29f919e39b8d1504193dd0229f2->leave($__internal_c2b0619d7a041d116dd5a13506aac781acc4d29f919e39b8d1504193dd0229f2_prof);

    }

    // line 63
    public function block_panel($context, array $blocks = array())
    {
        $__internal_9675db904d4452b45dbc7c9d0a932fa7eb4458bb9fa53384cc76d7431640549a = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_9675db904d4452b45dbc7c9d0a932fa7eb4458bb9fa53384cc76d7431640549a->enter($__internal_9675db904d4452b45dbc7c9d0a932fa7eb4458bb9fa53384cc76d7431640549a_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        $__internal_613ae9a326c2d55161c30c7d7449c7c2ee138276cd7ee7911431d9cf77d35ca4 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_613ae9a326c2d55161c30c7d7449c7c2ee138276cd7ee7911431d9cf77d35ca4->enter($__internal_613ae9a326c2d55161c30c7d7449c7c2ee138276cd7ee7911431d9cf77d35ca4_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        // line 64
        echo "
    <h2>Logs</h2>

    ";
        // line 67
        $this->loadTemplate("GuzzleBundle::profiler.html.twig", "GuzzleBundle::debug.html.twig", 67)->display(array_merge($context, array("collector" => ($context["collector"] ?? $this->getContext($context, "collector")))));
        
        $__internal_613ae9a326c2d55161c30c7d7449c7c2ee138276cd7ee7911431d9cf77d35ca4->leave($__internal_613ae9a326c2d55161c30c7d7449c7c2ee138276cd7ee7911431d9cf77d35ca4_prof);

        
        $__internal_9675db904d4452b45dbc7c9d0a932fa7eb4458bb9fa53384cc76d7431640549a->leave($__internal_9675db904d4452b45dbc7c9d0a932fa7eb4458bb9fa53384cc76d7431640549a_prof);

    }

    public function getTemplateName()
    {
        return "GuzzleBundle::debug.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  224 => 67,  219 => 64,  210 => 63,  198 => 60,  194 => 59,  189 => 57,  186 => 56,  177 => 55,  163 => 49,  156 => 45,  151 => 42,  142 => 41,  131 => 37,  129 => 36,  126 => 35,  122 => 33,  116 => 31,  110 => 29,  108 => 28,  100 => 23,  95 => 20,  93 => 19,  90 => 18,  84 => 15,  80 => 14,  75 => 13,  73 => 12,  70 => 11,  67 => 10,  64 => 9,  61 => 8,  58 => 7,  55 => 6,  52 => 5,  43 => 4,  11 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% extends \"WebProfilerBundle:Profiler:layout.html.twig\" %}


{% block toolbar %}
    {% if collector.callCount %}
        {% if collector.errorCount %}
            {% set color = 'red' %}
        {% else %}
            {% set color = 'green' %}
        {% endif %}

        {% set icon %}
            {{ include(\"@Guzzle/Icons/logo.svg.twig\") }}
            <span class=\"sf-toolbar-status sf-toolbar-status-{{ color }}\">
                {{ collector.callCount }}
            </span>
        {% endset %}

        {% set text %}

            <div class=\"sf-toolbar-info-piece\">
                <b>API Calls</b>
                <span>{{ collector.callCount }}</span>
            </div>

            <div class=\"sf-toolbar-info-piece\">
                <b>Total time</b>
                {% if collector.totalTime > 1.0 %}
                    <span>{{ '%0.2f'|format(collector.totalTime) }} s</span>
                {% else %}
                    <span>{{ '%0.0f'|format(collector.totalTime * 1000) }} ms</span>
                {% endif %}
            </div>
        {% endset %}

        {% include \"WebProfilerBundle:Profiler:toolbar_item.html.twig\" with { \"link\": profiler_url } %}
    {% endif %}
{% endblock %}


{% block menu %}

    <span class=\"label\">
        <span class=\"icon\">
            {{ include(\"@Guzzle/Icons/logo.svg.twig\") }}
        </span>
        <strong>Guzzle</strong>
        <span class=\"count\">
            <span>{{ collector.callCount }}</span>
        </span>
    </span>
{% endblock %}


{% block head %}

    {{ parent() }}

    <link rel=\"stylesheet\" href=\"{{ asset('bundles/guzzle/css/main.css') }}\" />
    <script src=\"{{ asset('bundles/guzzle/js/jquery.min.js') }}\"></script>
{% endblock %}

{% block panel %}

    <h2>Logs</h2>

    {% include 'GuzzleBundle::profiler.html.twig' with { 'collector': collector } %}
{% endblock %}
", "GuzzleBundle::debug.html.twig", "/Users/scaule/MyProject/beerify/front/vendor/eightpoints/guzzle-bundle/EightPoints/Bundle/GuzzleBundle/Resources/views/debug.html.twig");
    }
}
