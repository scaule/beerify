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
        $__internal_68c2859cf1712ad66b40027fbd6d90b5e395cc63f11c81be6d437b19de4859a7 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_68c2859cf1712ad66b40027fbd6d90b5e395cc63f11c81be6d437b19de4859a7->enter($__internal_68c2859cf1712ad66b40027fbd6d90b5e395cc63f11c81be6d437b19de4859a7_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "GuzzleBundle::debug.html.twig"));

        $__internal_24e4e2b2b0d7fdaf3738edc13dacf4055df89d3fff6886d32d4e4491dfc18db1 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_24e4e2b2b0d7fdaf3738edc13dacf4055df89d3fff6886d32d4e4491dfc18db1->enter($__internal_24e4e2b2b0d7fdaf3738edc13dacf4055df89d3fff6886d32d4e4491dfc18db1_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "GuzzleBundle::debug.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_68c2859cf1712ad66b40027fbd6d90b5e395cc63f11c81be6d437b19de4859a7->leave($__internal_68c2859cf1712ad66b40027fbd6d90b5e395cc63f11c81be6d437b19de4859a7_prof);

        
        $__internal_24e4e2b2b0d7fdaf3738edc13dacf4055df89d3fff6886d32d4e4491dfc18db1->leave($__internal_24e4e2b2b0d7fdaf3738edc13dacf4055df89d3fff6886d32d4e4491dfc18db1_prof);

    }

    // line 4
    public function block_toolbar($context, array $blocks = array())
    {
        $__internal_d7c17c64367d3a12f722b4c9ef0633f83a88b915e5392ce90900b94f886e507e = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_d7c17c64367d3a12f722b4c9ef0633f83a88b915e5392ce90900b94f886e507e->enter($__internal_d7c17c64367d3a12f722b4c9ef0633f83a88b915e5392ce90900b94f886e507e_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "toolbar"));

        $__internal_9510dba7dbd75e478fffbb7f26d5be579d9e0966ac0a02458126758921732388 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_9510dba7dbd75e478fffbb7f26d5be579d9e0966ac0a02458126758921732388->enter($__internal_9510dba7dbd75e478fffbb7f26d5be579d9e0966ac0a02458126758921732388_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "toolbar"));

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
        
        $__internal_9510dba7dbd75e478fffbb7f26d5be579d9e0966ac0a02458126758921732388->leave($__internal_9510dba7dbd75e478fffbb7f26d5be579d9e0966ac0a02458126758921732388_prof);

        
        $__internal_d7c17c64367d3a12f722b4c9ef0633f83a88b915e5392ce90900b94f886e507e->leave($__internal_d7c17c64367d3a12f722b4c9ef0633f83a88b915e5392ce90900b94f886e507e_prof);

    }

    // line 41
    public function block_menu($context, array $blocks = array())
    {
        $__internal_26d3e66105f37116326b2ec1e230dc72f854d544bf3e16450fdfe1e2af5fed26 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_26d3e66105f37116326b2ec1e230dc72f854d544bf3e16450fdfe1e2af5fed26->enter($__internal_26d3e66105f37116326b2ec1e230dc72f854d544bf3e16450fdfe1e2af5fed26_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        $__internal_3b02d47f4201ec2b096acbe4c5fe290da8640a52556d9c8cea7332057adc7df9 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_3b02d47f4201ec2b096acbe4c5fe290da8640a52556d9c8cea7332057adc7df9->enter($__internal_3b02d47f4201ec2b096acbe4c5fe290da8640a52556d9c8cea7332057adc7df9_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

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
        
        $__internal_3b02d47f4201ec2b096acbe4c5fe290da8640a52556d9c8cea7332057adc7df9->leave($__internal_3b02d47f4201ec2b096acbe4c5fe290da8640a52556d9c8cea7332057adc7df9_prof);

        
        $__internal_26d3e66105f37116326b2ec1e230dc72f854d544bf3e16450fdfe1e2af5fed26->leave($__internal_26d3e66105f37116326b2ec1e230dc72f854d544bf3e16450fdfe1e2af5fed26_prof);

    }

    // line 55
    public function block_head($context, array $blocks = array())
    {
        $__internal_fac0ba7fcc84b12cf629257441da635d97eca865fbfdae07cea810573889266f = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_fac0ba7fcc84b12cf629257441da635d97eca865fbfdae07cea810573889266f->enter($__internal_fac0ba7fcc84b12cf629257441da635d97eca865fbfdae07cea810573889266f_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

        $__internal_bedce6a7a4e271e40cb2868bf0c653a65e71f81f0b9e989b9f04739440cedc44 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_bedce6a7a4e271e40cb2868bf0c653a65e71f81f0b9e989b9f04739440cedc44->enter($__internal_bedce6a7a4e271e40cb2868bf0c653a65e71f81f0b9e989b9f04739440cedc44_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

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
        
        $__internal_bedce6a7a4e271e40cb2868bf0c653a65e71f81f0b9e989b9f04739440cedc44->leave($__internal_bedce6a7a4e271e40cb2868bf0c653a65e71f81f0b9e989b9f04739440cedc44_prof);

        
        $__internal_fac0ba7fcc84b12cf629257441da635d97eca865fbfdae07cea810573889266f->leave($__internal_fac0ba7fcc84b12cf629257441da635d97eca865fbfdae07cea810573889266f_prof);

    }

    // line 63
    public function block_panel($context, array $blocks = array())
    {
        $__internal_d75a03d35b56857eb8da6a8e61d718a8e3ff305293a5bb46672eed1b81ccb9b6 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_d75a03d35b56857eb8da6a8e61d718a8e3ff305293a5bb46672eed1b81ccb9b6->enter($__internal_d75a03d35b56857eb8da6a8e61d718a8e3ff305293a5bb46672eed1b81ccb9b6_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        $__internal_a129a71fadd454877dbd787de0642f5f53ea692dc320d9a0bc595d6aa4b68054 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_a129a71fadd454877dbd787de0642f5f53ea692dc320d9a0bc595d6aa4b68054->enter($__internal_a129a71fadd454877dbd787de0642f5f53ea692dc320d9a0bc595d6aa4b68054_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        // line 64
        echo "
    <h2>Logs</h2>

    ";
        // line 67
        $this->loadTemplate("GuzzleBundle::profiler.html.twig", "GuzzleBundle::debug.html.twig", 67)->display(array_merge($context, array("collector" => ($context["collector"] ?? $this->getContext($context, "collector")))));
        
        $__internal_a129a71fadd454877dbd787de0642f5f53ea692dc320d9a0bc595d6aa4b68054->leave($__internal_a129a71fadd454877dbd787de0642f5f53ea692dc320d9a0bc595d6aa4b68054_prof);

        
        $__internal_d75a03d35b56857eb8da6a8e61d718a8e3ff305293a5bb46672eed1b81ccb9b6->leave($__internal_d75a03d35b56857eb8da6a8e61d718a8e3ff305293a5bb46672eed1b81ccb9b6_prof);

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
", "GuzzleBundle::debug.html.twig", "/Users/scaule/MyProject/brew-manager/brew-front/vendor/eightpoints/guzzle-bundle/EightPoints/Bundle/GuzzleBundle/Resources/views/debug.html.twig");
    }
}
