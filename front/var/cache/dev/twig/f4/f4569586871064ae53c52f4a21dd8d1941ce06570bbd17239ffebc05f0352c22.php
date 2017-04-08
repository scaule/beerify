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
        $__internal_e5022bc57b3c615f60d790c350373317371915d2ab83a6263f03e786710d4415 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_e5022bc57b3c615f60d790c350373317371915d2ab83a6263f03e786710d4415->enter($__internal_e5022bc57b3c615f60d790c350373317371915d2ab83a6263f03e786710d4415_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/router.html.twig"));

        $__internal_bb14db8a3f2090a2a5141a9d0ff558464e963f2c2dbf6b264cd490c248ba8ba8 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_bb14db8a3f2090a2a5141a9d0ff558464e963f2c2dbf6b264cd490c248ba8ba8->enter($__internal_bb14db8a3f2090a2a5141a9d0ff558464e963f2c2dbf6b264cd490c248ba8ba8_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/router.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_e5022bc57b3c615f60d790c350373317371915d2ab83a6263f03e786710d4415->leave($__internal_e5022bc57b3c615f60d790c350373317371915d2ab83a6263f03e786710d4415_prof);

        
        $__internal_bb14db8a3f2090a2a5141a9d0ff558464e963f2c2dbf6b264cd490c248ba8ba8->leave($__internal_bb14db8a3f2090a2a5141a9d0ff558464e963f2c2dbf6b264cd490c248ba8ba8_prof);

    }

    // line 3
    public function block_toolbar($context, array $blocks = array())
    {
        $__internal_4e49359918b95aa76783df854ed7c7dd8ddc9cf87b90938da835d68fcaca443e = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_4e49359918b95aa76783df854ed7c7dd8ddc9cf87b90938da835d68fcaca443e->enter($__internal_4e49359918b95aa76783df854ed7c7dd8ddc9cf87b90938da835d68fcaca443e_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "toolbar"));

        $__internal_2d764e10fc116e1c334eecb9a4cbe9e1f850dae1ca5180facd7944fd0aab0d44 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_2d764e10fc116e1c334eecb9a4cbe9e1f850dae1ca5180facd7944fd0aab0d44->enter($__internal_2d764e10fc116e1c334eecb9a4cbe9e1f850dae1ca5180facd7944fd0aab0d44_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "toolbar"));

        
        $__internal_2d764e10fc116e1c334eecb9a4cbe9e1f850dae1ca5180facd7944fd0aab0d44->leave($__internal_2d764e10fc116e1c334eecb9a4cbe9e1f850dae1ca5180facd7944fd0aab0d44_prof);

        
        $__internal_4e49359918b95aa76783df854ed7c7dd8ddc9cf87b90938da835d68fcaca443e->leave($__internal_4e49359918b95aa76783df854ed7c7dd8ddc9cf87b90938da835d68fcaca443e_prof);

    }

    // line 5
    public function block_menu($context, array $blocks = array())
    {
        $__internal_9af74bdd6e50ca5f36041b3feeeaa8ead05120445945df7b8bedd88d3c9e3cd8 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_9af74bdd6e50ca5f36041b3feeeaa8ead05120445945df7b8bedd88d3c9e3cd8->enter($__internal_9af74bdd6e50ca5f36041b3feeeaa8ead05120445945df7b8bedd88d3c9e3cd8_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        $__internal_92e897784da45f728e89c807bb51e3d06cdcf4d7183e6757ce17459ae9549526 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_92e897784da45f728e89c807bb51e3d06cdcf4d7183e6757ce17459ae9549526->enter($__internal_92e897784da45f728e89c807bb51e3d06cdcf4d7183e6757ce17459ae9549526_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        // line 6
        echo "<span class=\"label\">
    <span class=\"icon\">";
        // line 7
        echo twig_include($this->env, $context, "@WebProfiler/Icon/router.svg");
        echo "</span>
    <strong>Routing</strong>
</span>
";
        
        $__internal_92e897784da45f728e89c807bb51e3d06cdcf4d7183e6757ce17459ae9549526->leave($__internal_92e897784da45f728e89c807bb51e3d06cdcf4d7183e6757ce17459ae9549526_prof);

        
        $__internal_9af74bdd6e50ca5f36041b3feeeaa8ead05120445945df7b8bedd88d3c9e3cd8->leave($__internal_9af74bdd6e50ca5f36041b3feeeaa8ead05120445945df7b8bedd88d3c9e3cd8_prof);

    }

    // line 12
    public function block_panel($context, array $blocks = array())
    {
        $__internal_3c1210b2a2921a6a95dd0fae6e4ca44b931d3c98c8a9d69342765c6c3deb1be9 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_3c1210b2a2921a6a95dd0fae6e4ca44b931d3c98c8a9d69342765c6c3deb1be9->enter($__internal_3c1210b2a2921a6a95dd0fae6e4ca44b931d3c98c8a9d69342765c6c3deb1be9_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        $__internal_62c6c2738ce6bf1f3df6a66c189b1570421fba18e74b6c982e830483e24655ba = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_62c6c2738ce6bf1f3df6a66c189b1570421fba18e74b6c982e830483e24655ba->enter($__internal_62c6c2738ce6bf1f3df6a66c189b1570421fba18e74b6c982e830483e24655ba_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        // line 13
        echo "    ";
        echo $this->env->getRuntime('Symfony\Bridge\Twig\Extension\HttpKernelRuntime')->renderFragment($this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("_profiler_router", array("token" => ($context["token"] ?? $this->getContext($context, "token")))));
        echo "
";
        
        $__internal_62c6c2738ce6bf1f3df6a66c189b1570421fba18e74b6c982e830483e24655ba->leave($__internal_62c6c2738ce6bf1f3df6a66c189b1570421fba18e74b6c982e830483e24655ba_prof);

        
        $__internal_3c1210b2a2921a6a95dd0fae6e4ca44b931d3c98c8a9d69342765c6c3deb1be9->leave($__internal_3c1210b2a2921a6a95dd0fae6e4ca44b931d3c98c8a9d69342765c6c3deb1be9_prof);

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
", "@WebProfiler/Collector/router.html.twig", "/Users/scaule/MyProject/brew-manager/brew-front/vendor/symfony/symfony/src/Symfony/Bundle/WebProfilerBundle/Resources/views/Collector/router.html.twig");
    }
}
