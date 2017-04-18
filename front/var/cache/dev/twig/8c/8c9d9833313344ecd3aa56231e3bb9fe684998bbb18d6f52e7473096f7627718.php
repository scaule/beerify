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
        $__internal_90736aa503afd791ec154c375c08ac5a2f96ffb4ef99beaf97b1f37d872acbf0 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_90736aa503afd791ec154c375c08ac5a2f96ffb4ef99beaf97b1f37d872acbf0->enter($__internal_90736aa503afd791ec154c375c08ac5a2f96ffb4ef99beaf97b1f37d872acbf0_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/exception.html.twig"));

        $__internal_a91fd34a5802609574236d87850e9faed6b66a36ed41daa9b43a93f539ebd5bf = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_a91fd34a5802609574236d87850e9faed6b66a36ed41daa9b43a93f539ebd5bf->enter($__internal_a91fd34a5802609574236d87850e9faed6b66a36ed41daa9b43a93f539ebd5bf_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/exception.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_90736aa503afd791ec154c375c08ac5a2f96ffb4ef99beaf97b1f37d872acbf0->leave($__internal_90736aa503afd791ec154c375c08ac5a2f96ffb4ef99beaf97b1f37d872acbf0_prof);

        
        $__internal_a91fd34a5802609574236d87850e9faed6b66a36ed41daa9b43a93f539ebd5bf->leave($__internal_a91fd34a5802609574236d87850e9faed6b66a36ed41daa9b43a93f539ebd5bf_prof);

    }

    // line 3
    public function block_head($context, array $blocks = array())
    {
        $__internal_2861d6702f9e9c4cddf0774bb36909ad42b4b7989b536e24d8a4707fa479877a = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_2861d6702f9e9c4cddf0774bb36909ad42b4b7989b536e24d8a4707fa479877a->enter($__internal_2861d6702f9e9c4cddf0774bb36909ad42b4b7989b536e24d8a4707fa479877a_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

        $__internal_fc5e3bfaabb86d344e7f7a9f64ce2244c8c217df1c1b82edc59c727b7de80efa = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_fc5e3bfaabb86d344e7f7a9f64ce2244c8c217df1c1b82edc59c727b7de80efa->enter($__internal_fc5e3bfaabb86d344e7f7a9f64ce2244c8c217df1c1b82edc59c727b7de80efa_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

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
        
        $__internal_fc5e3bfaabb86d344e7f7a9f64ce2244c8c217df1c1b82edc59c727b7de80efa->leave($__internal_fc5e3bfaabb86d344e7f7a9f64ce2244c8c217df1c1b82edc59c727b7de80efa_prof);

        
        $__internal_2861d6702f9e9c4cddf0774bb36909ad42b4b7989b536e24d8a4707fa479877a->leave($__internal_2861d6702f9e9c4cddf0774bb36909ad42b4b7989b536e24d8a4707fa479877a_prof);

    }

    // line 12
    public function block_menu($context, array $blocks = array())
    {
        $__internal_80363987eeee7c210c4807ee909530541d8a7b3883ee8b9036f225eb4294b87a = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_80363987eeee7c210c4807ee909530541d8a7b3883ee8b9036f225eb4294b87a->enter($__internal_80363987eeee7c210c4807ee909530541d8a7b3883ee8b9036f225eb4294b87a_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        $__internal_1b22c51799c4370758ebd18765bfcc5676ca8bc5697ca29a4f08e769eaca6ad2 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_1b22c51799c4370758ebd18765bfcc5676ca8bc5697ca29a4f08e769eaca6ad2->enter($__internal_1b22c51799c4370758ebd18765bfcc5676ca8bc5697ca29a4f08e769eaca6ad2_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

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
        
        $__internal_1b22c51799c4370758ebd18765bfcc5676ca8bc5697ca29a4f08e769eaca6ad2->leave($__internal_1b22c51799c4370758ebd18765bfcc5676ca8bc5697ca29a4f08e769eaca6ad2_prof);

        
        $__internal_80363987eeee7c210c4807ee909530541d8a7b3883ee8b9036f225eb4294b87a->leave($__internal_80363987eeee7c210c4807ee909530541d8a7b3883ee8b9036f225eb4294b87a_prof);

    }

    // line 24
    public function block_panel($context, array $blocks = array())
    {
        $__internal_172f15471a5afb9163f6aba1beda32d58c3e07c121996cffcb56a5648060989a = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_172f15471a5afb9163f6aba1beda32d58c3e07c121996cffcb56a5648060989a->enter($__internal_172f15471a5afb9163f6aba1beda32d58c3e07c121996cffcb56a5648060989a_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        $__internal_3f9f1455386a1c29600c7b43005a40358367ae6f569bbf759feadcc64de67a4a = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_3f9f1455386a1c29600c7b43005a40358367ae6f569bbf759feadcc64de67a4a->enter($__internal_3f9f1455386a1c29600c7b43005a40358367ae6f569bbf759feadcc64de67a4a_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

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
        
        $__internal_3f9f1455386a1c29600c7b43005a40358367ae6f569bbf759feadcc64de67a4a->leave($__internal_3f9f1455386a1c29600c7b43005a40358367ae6f569bbf759feadcc64de67a4a_prof);

        
        $__internal_172f15471a5afb9163f6aba1beda32d58c3e07c121996cffcb56a5648060989a->leave($__internal_172f15471a5afb9163f6aba1beda32d58c3e07c121996cffcb56a5648060989a_prof);

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
", "@WebProfiler/Collector/exception.html.twig", "/Users/scaule/MyProject/beerify/front/vendor/symfony/symfony/src/Symfony/Bundle/WebProfilerBundle/Resources/views/Collector/exception.html.twig");
    }
}
