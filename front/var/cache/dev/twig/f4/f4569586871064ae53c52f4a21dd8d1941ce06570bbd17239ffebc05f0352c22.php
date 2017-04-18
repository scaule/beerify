<?php

/* @WebProfiler/Collector/router.html.twig */
class __TwigTemplate_8f86478ac25dc11a71141ac4442469f483b4d9cb09fc4cb055b197f2f0ef6dc5 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("@WebProfiler/Profiler/layout.html.twig", "@WebProfiler/Collector/router.html.twig", 1);
        $this->blocks = array(
            'toolbar' => array($this, 'block_toolbar'),
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
        $__internal_72d0c0e8d2b9f3db48ffb7e05576b7f813aae712c09571cd6853b6f8997efc07 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_72d0c0e8d2b9f3db48ffb7e05576b7f813aae712c09571cd6853b6f8997efc07->enter($__internal_72d0c0e8d2b9f3db48ffb7e05576b7f813aae712c09571cd6853b6f8997efc07_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/router.html.twig"));

        $__internal_c302695b805e01cb20ef9827fbab1f18ad68f63cc452046f4eb839f4d439fa49 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_c302695b805e01cb20ef9827fbab1f18ad68f63cc452046f4eb839f4d439fa49->enter($__internal_c302695b805e01cb20ef9827fbab1f18ad68f63cc452046f4eb839f4d439fa49_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/router.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_72d0c0e8d2b9f3db48ffb7e05576b7f813aae712c09571cd6853b6f8997efc07->leave($__internal_72d0c0e8d2b9f3db48ffb7e05576b7f813aae712c09571cd6853b6f8997efc07_prof);

        
        $__internal_c302695b805e01cb20ef9827fbab1f18ad68f63cc452046f4eb839f4d439fa49->leave($__internal_c302695b805e01cb20ef9827fbab1f18ad68f63cc452046f4eb839f4d439fa49_prof);

    }

    // line 3
    public function block_toolbar($context, array $blocks = array())
    {
        $__internal_70fbc94f4e5d7d24427f68160aebb459c21d3c74f3ef7520d97d2e0b0ff3ca33 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_70fbc94f4e5d7d24427f68160aebb459c21d3c74f3ef7520d97d2e0b0ff3ca33->enter($__internal_70fbc94f4e5d7d24427f68160aebb459c21d3c74f3ef7520d97d2e0b0ff3ca33_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "toolbar"));

        $__internal_79ffd2b55778985c55276325d5748b9a452db7f887beada3e65817526b62d0de = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_79ffd2b55778985c55276325d5748b9a452db7f887beada3e65817526b62d0de->enter($__internal_79ffd2b55778985c55276325d5748b9a452db7f887beada3e65817526b62d0de_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "toolbar"));

        
        $__internal_79ffd2b55778985c55276325d5748b9a452db7f887beada3e65817526b62d0de->leave($__internal_79ffd2b55778985c55276325d5748b9a452db7f887beada3e65817526b62d0de_prof);

        
        $__internal_70fbc94f4e5d7d24427f68160aebb459c21d3c74f3ef7520d97d2e0b0ff3ca33->leave($__internal_70fbc94f4e5d7d24427f68160aebb459c21d3c74f3ef7520d97d2e0b0ff3ca33_prof);

    }

    // line 5
    public function block_menu($context, array $blocks = array())
    {
        $__internal_cf083abd90a106ee330876cedf34afdffc8428acbecce23f7c659d4c42d8872e = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_cf083abd90a106ee330876cedf34afdffc8428acbecce23f7c659d4c42d8872e->enter($__internal_cf083abd90a106ee330876cedf34afdffc8428acbecce23f7c659d4c42d8872e_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        $__internal_4fc565baa0043398b6905c46dbf74164706292c5588882ad04afd6b4383f13ea = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_4fc565baa0043398b6905c46dbf74164706292c5588882ad04afd6b4383f13ea->enter($__internal_4fc565baa0043398b6905c46dbf74164706292c5588882ad04afd6b4383f13ea_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        // line 6
        echo "<span class=\"label\">
    <span class=\"icon\">";
        // line 7
        echo twig_include($this->env, $context, "@WebProfiler/Icon/router.svg");
        echo "</span>
    <strong>Routing</strong>
</span>
";
        
        $__internal_4fc565baa0043398b6905c46dbf74164706292c5588882ad04afd6b4383f13ea->leave($__internal_4fc565baa0043398b6905c46dbf74164706292c5588882ad04afd6b4383f13ea_prof);

        
        $__internal_cf083abd90a106ee330876cedf34afdffc8428acbecce23f7c659d4c42d8872e->leave($__internal_cf083abd90a106ee330876cedf34afdffc8428acbecce23f7c659d4c42d8872e_prof);

    }

    // line 12
    public function block_panel($context, array $blocks = array())
    {
        $__internal_d92ed7afa7ac3951c36d92c5bc079bab662882d51723629818ac88284d0baa91 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_d92ed7afa7ac3951c36d92c5bc079bab662882d51723629818ac88284d0baa91->enter($__internal_d92ed7afa7ac3951c36d92c5bc079bab662882d51723629818ac88284d0baa91_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        $__internal_1c2ee1eb45e09b299bc32968cc389050e5c257775a1ed37f698e90f3c8d06887 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_1c2ee1eb45e09b299bc32968cc389050e5c257775a1ed37f698e90f3c8d06887->enter($__internal_1c2ee1eb45e09b299bc32968cc389050e5c257775a1ed37f698e90f3c8d06887_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        // line 13
        echo "    ";
        echo $this->env->getRuntime('Symfony\Bridge\Twig\Extension\HttpKernelRuntime')->renderFragment($this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("_profiler_router", array("token" => ($context["token"] ?? $this->getContext($context, "token")))));
        echo "
";
        
        $__internal_1c2ee1eb45e09b299bc32968cc389050e5c257775a1ed37f698e90f3c8d06887->leave($__internal_1c2ee1eb45e09b299bc32968cc389050e5c257775a1ed37f698e90f3c8d06887_prof);

        
        $__internal_d92ed7afa7ac3951c36d92c5bc079bab662882d51723629818ac88284d0baa91->leave($__internal_d92ed7afa7ac3951c36d92c5bc079bab662882d51723629818ac88284d0baa91_prof);

    }

    public function getTemplateName()
    {
        return "@WebProfiler/Collector/router.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  94 => 13,  85 => 12,  71 => 7,  68 => 6,  59 => 5,  42 => 3,  11 => 1,);
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

{% block toolbar %}{% endblock %}

{% block menu %}
<span class=\"label\">
    <span class=\"icon\">{{ include('@WebProfiler/Icon/router.svg') }}</span>
    <strong>Routing</strong>
</span>
{% endblock %}

{% block panel %}
    {{ render(path('_profiler_router', { token: token })) }}
{% endblock %}
", "@WebProfiler/Collector/router.html.twig", "/Users/scaule/MyProject/beerify/front/vendor/symfony/symfony/src/Symfony/Bundle/WebProfilerBundle/Resources/views/Collector/router.html.twig");
    }
}
