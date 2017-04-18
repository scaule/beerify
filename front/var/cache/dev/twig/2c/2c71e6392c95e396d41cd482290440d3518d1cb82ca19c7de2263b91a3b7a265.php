<?php

/* @Twig/Exception/traces.txt.twig */
class __TwigTemplate_1a77698b4baf86797e2c8f072bf8214cfd93db67fc99a97d5ca77e5d2ce01dd5 extends Twig_Template
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
        $__internal_c5f86a5158ef78c4906ff215859b66f2b7ca56deda1687defc88c0f71d5d3024 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_c5f86a5158ef78c4906ff215859b66f2b7ca56deda1687defc88c0f71d5d3024->enter($__internal_c5f86a5158ef78c4906ff215859b66f2b7ca56deda1687defc88c0f71d5d3024_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@Twig/Exception/traces.txt.twig"));

        $__internal_f33e6a26240d1adaeeb2f1583dd6001db7b2b585fe51f327716c493ea65f23ee = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_f33e6a26240d1adaeeb2f1583dd6001db7b2b585fe51f327716c493ea65f23ee->enter($__internal_f33e6a26240d1adaeeb2f1583dd6001db7b2b585fe51f327716c493ea65f23ee_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@Twig/Exception/traces.txt.twig"));

        // line 1
        if (twig_length_filter($this->env, $this->getAttribute(($context["exception"] ?? $this->getContext($context, "exception")), "trace", array()))) {
            // line 2
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["exception"] ?? $this->getContext($context, "exception")), "trace", array()));
            foreach ($context['_seq'] as $context["_key"] => $context["trace"]) {
                // line 3
                $this->loadTemplate("@Twig/Exception/trace.txt.twig", "@Twig/Exception/traces.txt.twig", 3)->display(array("trace" => $context["trace"]));
                // line 4
                echo "
";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['trace'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
        }
        
        $__internal_c5f86a5158ef78c4906ff215859b66f2b7ca56deda1687defc88c0f71d5d3024->leave($__internal_c5f86a5158ef78c4906ff215859b66f2b7ca56deda1687defc88c0f71d5d3024_prof);

        
        $__internal_f33e6a26240d1adaeeb2f1583dd6001db7b2b585fe51f327716c493ea65f23ee->leave($__internal_f33e6a26240d1adaeeb2f1583dd6001db7b2b585fe51f327716c493ea65f23ee_prof);

    }

    public function getTemplateName()
    {
        return "@Twig/Exception/traces.txt.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  33 => 4,  31 => 3,  27 => 2,  25 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% if exception.trace|length %}
{% for trace in exception.trace %}
{% include '@Twig/Exception/trace.txt.twig' with { 'trace': trace } only %}

{% endfor %}
{% endif %}
", "@Twig/Exception/traces.txt.twig", "/Users/scaule/MyProject/beerify/front/vendor/symfony/symfony/src/Symfony/Bundle/TwigBundle/Resources/views/Exception/traces.txt.twig");
    }
}
