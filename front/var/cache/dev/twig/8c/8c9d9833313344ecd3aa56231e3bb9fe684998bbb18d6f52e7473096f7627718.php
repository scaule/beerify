<?php

/* @WebProfiler/Collector/exception.html.twig */
class __TwigTemplate_b6accece8157d65efe15f4b3f71f5e5348c4732629cefe7dc0fa403274b137ad extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("@WebProfiler/Profiler/layout.html.twig", "@WebProfiler/Collector/exception.html.twig", 1);
        $this->blocks = array(
            'head' => array($this, 'block_head'),
            'menu' => array($this, 'block_menu'),
            'panel' => array($this, 'block_panel'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "@WebProfiler/Profiler/layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_ca17734c90f124e29e6271c77951fa8142fe9bf58461be13ba5f4e83ea40112a = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_ca17734c90f124e29e6271c77951fa8142fe9bf58461be13ba5f4e83ea40112a->enter($__internal_ca17734c90f124e29e6271c77951fa8142fe9bf58461be13ba5f4e83ea40112a_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/exception.html.twig"));

        $__internal_ac2832dcb610747f2fc66ef20bd2ce34e919b2b8f55c1499536db4e25b4ab401 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_ac2832dcb610747f2fc66ef20bd2ce34e919b2b8f55c1499536db4e25b4ab401->enter($__internal_ac2832dcb610747f2fc66ef20bd2ce34e919b2b8f55c1499536db4e25b4ab401_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/exception.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_ca17734c90f124e29e6271c77951fa8142fe9bf58461be13ba5f4e83ea40112a->leave($__internal_ca17734c90f124e29e6271c77951fa8142fe9bf58461be13ba5f4e83ea40112a_prof);

        
        $__internal_ac2832dcb610747f2fc66ef20bd2ce34e919b2b8f55c1499536db4e25b4ab401->leave($__internal_ac2832dcb610747f2fc66ef20bd2ce34e919b2b8f55c1499536db4e25b4ab401_prof);

    }

    // line 3
    public function block_head($context, array $blocks = array())
    {
        $__internal_4a811993ff6934fbc7f47e2efb7c30718168e50493ab1e5b7bf67ecd3bd57c01 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_4a811993ff6934fbc7f47e2efb7c30718168e50493ab1e5b7bf67ecd3bd57c01->enter($__internal_4a811993ff6934fbc7f47e2efb7c30718168e50493ab1e5b7bf67ecd3bd57c01_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

        $__internal_4e676f0dda1b4d7a2764894e27da4b26a48043d1a273c6fb7fc1324b0f9c0380 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_4e676f0dda1b4d7a2764894e27da4b26a48043d1a273c6fb7fc1324b0f9c0380->enter($__internal_4e676f0dda1b4d7a2764894e27da4b26a48043d1a273c6fb7fc1324b0f9c0380_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

        // line 4
        echo "    ";
        if ($this->getAttribute(($context["collector"] ?? $this->getContext($context, "collector")), "hasexception", array())) {
            // line 5
            echo "        <style>
            ";
            // line 6
            echo $this->env->getRuntime('Symfony\Bridge\Twig\Extension\HttpKernelRuntime')->renderFragment($this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("_profiler_exception_css", array("token" => ($context["token"] ?? $this->getContext($context, "token")))));
            echo "
        </style>
    ";
        }
        // line 9
        echo "    ";
        $this->displayParentBlock("head", $context, $blocks);
        echo "
";
        
        $__internal_4e676f0dda1b4d7a2764894e27da4b26a48043d1a273c6fb7fc1324b0f9c0380->leave($__internal_4e676f0dda1b4d7a2764894e27da4b26a48043d1a273c6fb7fc1324b0f9c0380_prof);

        
        $__internal_4a811993ff6934fbc7f47e2efb7c30718168e50493ab1e5b7bf67ecd3bd57c01->leave($__internal_4a811993ff6934fbc7f47e2efb7c30718168e50493ab1e5b7bf67ecd3bd57c01_prof);

    }

    // line 12
    public function block_menu($context, array $blocks = array())
    {
        $__internal_d84fa6f663e2b0e867c26645de1e8161576d88dba1b079eb159f80cfe089f1a6 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_d84fa6f663e2b0e867c26645de1e8161576d88dba1b079eb159f80cfe089f1a6->enter($__internal_d84fa6f663e2b0e867c26645de1e8161576d88dba1b079eb159f80cfe089f1a6_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        $__internal_58c05e6480b6f1a4e840995332626627e933cde81b86c41e26a8c40476fa54eb = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_58c05e6480b6f1a4e840995332626627e933cde81b86c41e26a8c40476fa54eb->enter($__internal_58c05e6480b6f1a4e840995332626627e933cde81b86c41e26a8c40476fa54eb_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        // line 13
        echo "    <span class=\"label ";
        echo (($this->getAttribute(($context["collector"] ?? $this->getContext($context, "collector")), "hasexception", array())) ? ("label-status-error") : ("disabled"));
        echo "\">
        <span class=\"icon\">";
        // line 14
        echo twig_include($this->env, $context, "@WebProfiler/Icon/exception.svg");
        echo "</span>
        <strong>Exception</strong>
        ";
        // line 16
        if ($this->getAttribute(($context["collector"] ?? $this->getContext($context, "collector")), "hasexception", array())) {
            // line 17
            echo "            <span class=\"count\">
                <span>1</span>
            </span>
        ";
        }
        // line 21
        echo "    </span>
";
        
        $__internal_58c05e6480b6f1a4e840995332626627e933cde81b86c41e26a8c40476fa54eb->leave($__internal_58c05e6480b6f1a4e840995332626627e933cde81b86c41e26a8c40476fa54eb_prof);

        
        $__internal_d84fa6f663e2b0e867c26645de1e8161576d88dba1b079eb159f80cfe089f1a6->leave($__internal_d84fa6f663e2b0e867c26645de1e8161576d88dba1b079eb159f80cfe089f1a6_prof);

    }

    // line 24
    public function block_panel($context, array $blocks = array())
    {
        $__internal_4b29f3856a38a1de489d616d14a3788a17dc1e7670a9fe1a7e43eeb449e2ad85 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_4b29f3856a38a1de489d616d14a3788a17dc1e7670a9fe1a7e43eeb449e2ad85->enter($__internal_4b29f3856a38a1de489d616d14a3788a17dc1e7670a9fe1a7e43eeb449e2ad85_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        $__internal_5e0fcce606fcbfcc6ed2e8a1c5b2a9f8b4d7695295916f2115c3174a3cf7e91e = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_5e0fcce606fcbfcc6ed2e8a1c5b2a9f8b4d7695295916f2115c3174a3cf7e91e->enter($__internal_5e0fcce606fcbfcc6ed2e8a1c5b2a9f8b4d7695295916f2115c3174a3cf7e91e_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        // line 25
        echo "    <h2>Exceptions</h2>

    ";
        // line 27
        if ( !$this->getAttribute(($context["collector"] ?? $this->getContext($context, "collector")), "hasexception", array())) {
            // line 28
            echo "        <div class=\"empty\">
            <p>No exception was thrown and caught during the request.</p>
        </div>
    ";
        } else {
            // line 32
            echo "        <div class=\"sf-reset\">
            ";
            // line 33
            echo $this->env->getRuntime('Symfony\Bridge\Twig\Extension\HttpKernelRuntime')->renderFragment($this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("_profiler_exception", array("token" => ($context["token"] ?? $this->getContext($context, "token")))));
            echo "
        </div>
    ";
        }
        
        $__internal_5e0fcce606fcbfcc6ed2e8a1c5b2a9f8b4d7695295916f2115c3174a3cf7e91e->leave($__internal_5e0fcce606fcbfcc6ed2e8a1c5b2a9f8b4d7695295916f2115c3174a3cf7e91e_prof);

        
        $__internal_4b29f3856a38a1de489d616d14a3788a17dc1e7670a9fe1a7e43eeb449e2ad85->leave($__internal_4b29f3856a38a1de489d616d14a3788a17dc1e7670a9fe1a7e43eeb449e2ad85_prof);

    }

    public function getTemplateName()
    {
        return "@WebProfiler/Collector/exception.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  138 => 33,  135 => 32,  129 => 28,  127 => 27,  123 => 25,  114 => 24,  103 => 21,  97 => 17,  95 => 16,  90 => 14,  85 => 13,  76 => 12,  63 => 9,  57 => 6,  54 => 5,  51 => 4,  42 => 3,  11 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% extends '@WebProfiler/Profiler/layout.html.twig' %}

{% block head %}
    {% if collector.hasexception %}
        <style>
            {{ render(path('_profiler_exception_css', { token: token })) }}
        </style>
    {% endif %}
    {{ parent() }}
{% endblock %}

{% block menu %}
    <span class=\"label {{ collector.hasexception ? 'label-status-error' : 'disabled' }}\">
        <span class=\"icon\">{{ include('@WebProfiler/Icon/exception.svg') }}</span>
        <strong>Exception</strong>
        {% if collector.hasexception %}
            <span class=\"count\">
                <span>1</span>
            </span>
        {% endif %}
    </span>
{% endblock %}

{% block panel %}
    <h2>Exceptions</h2>

    {% if not collector.hasexception %}
        <div class=\"empty\">
            <p>No exception was thrown and caught during the request.</p>
        </div>
    {% else %}
        <div class=\"sf-reset\">
            {{ render(path('_profiler_exception', { token: token })) }}
        </div>
    {% endif %}
{% endblock %}
", "@WebProfiler/Collector/exception.html.twig", "/Users/scaule/MyProject/brew-manager/brew-front/vendor/symfony/symfony/src/Symfony/Bundle/WebProfilerBundle/Resources/views/Collector/exception.html.twig");
    }
}
