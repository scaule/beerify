<?php

/* @WebProfiler/Profiler/header.html.twig */
class __TwigTemplate_dda755534932d845c9ad72f0f8dc641b5f78e9795fdca10d7abd86884723379c extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_46a389bd5ba421f0751c4ca81a70b870b5d3844ce62ecadeea872548028b691c = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_46a389bd5ba421f0751c4ca81a70b870b5d3844ce62ecadeea872548028b691c->enter($__internal_46a389bd5ba421f0751c4ca81a70b870b5d3844ce62ecadeea872548028b691c_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Profiler/header.html.twig"));

        $__internal_cf117b903f09a2b30e74ec5124b30b590e7049dea03c43d16bedd337ff822ec3 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_cf117b903f09a2b30e74ec5124b30b590e7049dea03c43d16bedd337ff822ec3->enter($__internal_cf117b903f09a2b30e74ec5124b30b590e7049dea03c43d16bedd337ff822ec3_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Profiler/header.html.twig"));

        // line 1
        echo "<div id=\"header\">
    <div class=\"container\">
        <h1>";
        // line 3
        echo twig_include($this->env, $context, "@WebProfiler/Icon/symfony.svg");
        echo " Symfony <span>Profiler</span></h1>

        <div class=\"search\">
            <form method=\"get\" action=\"https://symfony.com/search\" target=\"_blank\">
                <div class=\"form-row\">
                    <input name=\"q\" id=\"search-id\" type=\"search\" placeholder=\"search on symfony.com\">
                    <button type=\"submit\" class=\"btn\">Search</button>
                </div>
           </form>
        </div>
    </div>
</div>
";
        
        $__internal_46a389bd5ba421f0751c4ca81a70b870b5d3844ce62ecadeea872548028b691c->leave($__internal_46a389bd5ba421f0751c4ca81a70b870b5d3844ce62ecadeea872548028b691c_prof);

        
        $__internal_cf117b903f09a2b30e74ec5124b30b590e7049dea03c43d16bedd337ff822ec3->leave($__internal_cf117b903f09a2b30e74ec5124b30b590e7049dea03c43d16bedd337ff822ec3_prof);

    }

    public function getTemplateName()
    {
        return "@WebProfiler/Profiler/header.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  29 => 3,  25 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("<div id=\"header\">
    <div class=\"container\">
        <h1>{{ include('@WebProfiler/Icon/symfony.svg') }} Symfony <span>Profiler</span></h1>

        <div class=\"search\">
            <form method=\"get\" action=\"https://symfony.com/search\" target=\"_blank\">
                <div class=\"form-row\">
                    <input name=\"q\" id=\"search-id\" type=\"search\" placeholder=\"search on symfony.com\">
                    <button type=\"submit\" class=\"btn\">Search</button>
                </div>
           </form>
        </div>
    </div>
</div>
", "@WebProfiler/Profiler/header.html.twig", "/Users/scaule/MyProject/brew-manager/brew-front/vendor/symfony/symfony/src/Symfony/Bundle/WebProfilerBundle/Resources/views/Profiler/header.html.twig");
    }
}
