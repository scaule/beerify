<?php

/* @WebProfiler/Collector/ajax.html.twig */
class __TwigTemplate_5305a33aeb7ab0a5e783b379c8bfe75edc84e887ae6b5ec7df5d74ec72f3cdf3 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("@WebProfiler/Profiler/layout.html.twig", "@WebProfiler/Collector/ajax.html.twig", 1);
        $this->blocks = array(
            'toolbar' => array($this, 'block_toolbar'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "@WebProfiler/Profiler/layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_8d1dda3ce0821ad7ac5bee4c071a46dc0da92186ab1d5771ada83eb8d0f19f88 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_8d1dda3ce0821ad7ac5bee4c071a46dc0da92186ab1d5771ada83eb8d0f19f88->enter($__internal_8d1dda3ce0821ad7ac5bee4c071a46dc0da92186ab1d5771ada83eb8d0f19f88_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/ajax.html.twig"));

        $__internal_4e2440c8d67d5b56054db9244f419d58089859b14148f83c70bda0f2de9a89c5 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_4e2440c8d67d5b56054db9244f419d58089859b14148f83c70bda0f2de9a89c5->enter($__internal_4e2440c8d67d5b56054db9244f419d58089859b14148f83c70bda0f2de9a89c5_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/ajax.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_8d1dda3ce0821ad7ac5bee4c071a46dc0da92186ab1d5771ada83eb8d0f19f88->leave($__internal_8d1dda3ce0821ad7ac5bee4c071a46dc0da92186ab1d5771ada83eb8d0f19f88_prof);

        
        $__internal_4e2440c8d67d5b56054db9244f419d58089859b14148f83c70bda0f2de9a89c5->leave($__internal_4e2440c8d67d5b56054db9244f419d58089859b14148f83c70bda0f2de9a89c5_prof);

    }

    // line 3
    public function block_toolbar($context, array $blocks = array())
    {
        $__internal_92e44bfce0bbf34117435b999f0d9a3c39328d4d9489a9266ed1b885390781dc = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_92e44bfce0bbf34117435b999f0d9a3c39328d4d9489a9266ed1b885390781dc->enter($__internal_92e44bfce0bbf34117435b999f0d9a3c39328d4d9489a9266ed1b885390781dc_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "toolbar"));

        $__internal_454bb955f566a38a89318892e568991cddb070be40b424d874170ff8d44e92ef = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_454bb955f566a38a89318892e568991cddb070be40b424d874170ff8d44e92ef->enter($__internal_454bb955f566a38a89318892e568991cddb070be40b424d874170ff8d44e92ef_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "toolbar"));

        // line 4
        echo "    ";
        ob_start();
        // line 5
        echo "        ";
        echo twig_include($this->env, $context, "@WebProfiler/Icon/ajax.svg");
        echo "
        <span class=\"sf-toolbar-value sf-toolbar-ajax-requests\">0</span>
    ";
        $context["icon"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
        // line 8
        echo "
    ";
        // line 9
        $context["text"] = ('' === $tmp = "        <div class=\"sf-toolbar-info-piece\">
            <b class=\"sf-toolbar-ajax-info\"></b>
        </div>
        <div class=\"sf-toolbar-info-piece\">
            <table class=\"sf-toolbar-ajax-requests\">
                <thead>
                    <tr>
                        <th>Method</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>URL</th>
                        <th>Time</th>
                        <th>Profile</th>
                    </tr>
                </thead>
                <tbody class=\"sf-toolbar-ajax-request-list\"></tbody>
            </table>
        </div>
    ") ? '' : new Twig_Markup($tmp, $this->env->getCharset());
        // line 29
        echo "
    ";
        // line 30
        echo twig_include($this->env, $context, "@WebProfiler/Profiler/toolbar_item.html.twig", array("link" => false));
        echo "
";
        
        $__internal_454bb955f566a38a89318892e568991cddb070be40b424d874170ff8d44e92ef->leave($__internal_454bb955f566a38a89318892e568991cddb070be40b424d874170ff8d44e92ef_prof);

        
        $__internal_92e44bfce0bbf34117435b999f0d9a3c39328d4d9489a9266ed1b885390781dc->leave($__internal_92e44bfce0bbf34117435b999f0d9a3c39328d4d9489a9266ed1b885390781dc_prof);

    }

    public function getTemplateName()
    {
        return "@WebProfiler/Collector/ajax.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  85 => 30,  82 => 29,  62 => 9,  59 => 8,  52 => 5,  49 => 4,  40 => 3,  11 => 1,);
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

{% block toolbar %}
    {% set icon %}
        {{ include('@WebProfiler/Icon/ajax.svg') }}
        <span class=\"sf-toolbar-value sf-toolbar-ajax-requests\">0</span>
    {% endset %}

    {% set text %}
        <div class=\"sf-toolbar-info-piece\">
            <b class=\"sf-toolbar-ajax-info\"></b>
        </div>
        <div class=\"sf-toolbar-info-piece\">
            <table class=\"sf-toolbar-ajax-requests\">
                <thead>
                    <tr>
                        <th>Method</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>URL</th>
                        <th>Time</th>
                        <th>Profile</th>
                    </tr>
                </thead>
                <tbody class=\"sf-toolbar-ajax-request-list\"></tbody>
            </table>
        </div>
    {% endset %}

    {{ include('@WebProfiler/Profiler/toolbar_item.html.twig', { link: false }) }}
{% endblock %}
", "@WebProfiler/Collector/ajax.html.twig", "/Users/scaule/MyProject/beerify/front/vendor/symfony/symfony/src/Symfony/Bundle/WebProfilerBundle/Resources/views/Collector/ajax.html.twig");
    }
}
