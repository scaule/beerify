<?php

/* BrewingBundle:Page:index.html.twig */
class __TwigTemplate_69e6de2edc8050386c94430c100503a787a786ea19bc6025385c9a6f44b37f40 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("base.html.twig", "BrewingBundle:Page:index.html.twig", 1);
        $this->blocks = array(
            'body' => array($this, 'block_body'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_89940f64b0fada12a3029acfcfa51d2ce030e96ea9e9dc63353ff1059ae59757 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_89940f64b0fada12a3029acfcfa51d2ce030e96ea9e9dc63353ff1059ae59757->enter($__internal_89940f64b0fada12a3029acfcfa51d2ce030e96ea9e9dc63353ff1059ae59757_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "BrewingBundle:Page:index.html.twig"));

        $__internal_d8fa42768f4ef79d74d43c05af03a10f6888902f684fdca68414305af8a2349d = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_d8fa42768f4ef79d74d43c05af03a10f6888902f684fdca68414305af8a2349d->enter($__internal_d8fa42768f4ef79d74d43c05af03a10f6888902f684fdca68414305af8a2349d_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "BrewingBundle:Page:index.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_89940f64b0fada12a3029acfcfa51d2ce030e96ea9e9dc63353ff1059ae59757->leave($__internal_89940f64b0fada12a3029acfcfa51d2ce030e96ea9e9dc63353ff1059ae59757_prof);

        
        $__internal_d8fa42768f4ef79d74d43c05af03a10f6888902f684fdca68414305af8a2349d->leave($__internal_d8fa42768f4ef79d74d43c05af03a10f6888902f684fdca68414305af8a2349d_prof);

    }

    // line 5
    public function block_body($context, array $blocks = array())
    {
        $__internal_a184b9af4432cdb31509996ad383d600f75355a99768a104307ec6272a3d4d7b = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_a184b9af4432cdb31509996ad383d600f75355a99768a104307ec6272a3d4d7b->enter($__internal_a184b9af4432cdb31509996ad383d600f75355a99768a104307ec6272a3d4d7b_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        $__internal_13af8cd17ca338b0b53f81e993f53e6648a2e2e1832647fffe3e0d5dc89423e3 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_13af8cd17ca338b0b53f81e993f53e6648a2e2e1832647fffe3e0d5dc89423e3->enter($__internal_13af8cd17ca338b0b53f81e993f53e6648a2e2e1832647fffe3e0d5dc89423e3_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        // line 6
        echo "    <div class=\"row\">
        <div class=\"col-md-6 col-sm-12 col-xs-12\">
            <div class=\"dashboard_graph\">
                <div class=\"row x_title\">
                    <div class=\"col-md-12\">
                        <h3>Current Brewing</h3>
                        <div class=\"row\">
                            <div class=\"col-md-12\">
                                <canvas id=\"myChart\"></canvas>
                            </div>
                            <div>
                                <button id=\"brewing-autorefresh\" class=\"btn-success\">Autorefresh</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=\"clearfix\"></div>
            </div>
        </div>
        <div class=\"col-md-6 col-sm-12 col-xs-12\">
            <div class=\"x_panel\">
                <div class=\"x_title\">
                    <h2>Profiles</h2>
                    <ul class=\"nav navbar-right panel_toolbox\">
                        <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>
                        </li>
                        <li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>
                        </li>
                    </ul>
                    <div class=\"clearfix\"></div>
                </div>
                <div class=\"x_content\">
                    ";
        // line 38
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["profils"] ?? $this->getContext($context, "profils")));
        foreach ($context['_seq'] as $context["_key"] => $context["profil"]) {
            // line 39
            echo "                        <article class=\"media event\">
                            <div class=\"media-body\">
                                <a class=\"title\" href=\"#\">";
            // line 41
            echo twig_escape_filter($this->env, $this->getAttribute($context["profil"], "name", array()), "html", null, true);
            echo "</a>
                                <p>";
            // line 42
            echo twig_escape_filter($this->env, $this->getAttribute($context["profil"], "description", array()), "html", null, true);
            echo "</p>
                                <p>Temperatures : ";
            // line 43
            echo twig_escape_filter($this->env, $this->getAttribute($context["profil"], "temperatures", array()), "html", null, true);
            echo "</p>
                                <p>Timing : ";
            // line 44
            echo twig_escape_filter($this->env, $this->getAttribute($context["profil"], "timing", array()), "html", null, true);
            echo "</p>
                            </div>
                        </article>
                    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['profil'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 48
        echo "                </div>
            </div>
        </div>
    </div>
";
        
        $__internal_13af8cd17ca338b0b53f81e993f53e6648a2e2e1832647fffe3e0d5dc89423e3->leave($__internal_13af8cd17ca338b0b53f81e993f53e6648a2e2e1832647fffe3e0d5dc89423e3_prof);

        
        $__internal_a184b9af4432cdb31509996ad383d600f75355a99768a104307ec6272a3d4d7b->leave($__internal_a184b9af4432cdb31509996ad383d600f75355a99768a104307ec6272a3d4d7b_prof);

    }

    public function getTemplateName()
    {
        return "BrewingBundle:Page:index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  113 => 48,  103 => 44,  99 => 43,  95 => 42,  91 => 41,  87 => 39,  83 => 38,  49 => 6,  40 => 5,  11 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% extends 'base.html.twig' %}



{% block body %}
    <div class=\"row\">
        <div class=\"col-md-6 col-sm-12 col-xs-12\">
            <div class=\"dashboard_graph\">
                <div class=\"row x_title\">
                    <div class=\"col-md-12\">
                        <h3>Current Brewing</h3>
                        <div class=\"row\">
                            <div class=\"col-md-12\">
                                <canvas id=\"myChart\"></canvas>
                            </div>
                            <div>
                                <button id=\"brewing-autorefresh\" class=\"btn-success\">Autorefresh</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=\"clearfix\"></div>
            </div>
        </div>
        <div class=\"col-md-6 col-sm-12 col-xs-12\">
            <div class=\"x_panel\">
                <div class=\"x_title\">
                    <h2>Profiles</h2>
                    <ul class=\"nav navbar-right panel_toolbox\">
                        <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>
                        </li>
                        <li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>
                        </li>
                    </ul>
                    <div class=\"clearfix\"></div>
                </div>
                <div class=\"x_content\">
                    {% for profil in profils %}
                        <article class=\"media event\">
                            <div class=\"media-body\">
                                <a class=\"title\" href=\"#\">{{ profil.name }}</a>
                                <p>{{ profil.description }}</p>
                                <p>Temperatures : {{ profil.temperatures }}</p>
                                <p>Timing : {{ profil.timing }}</p>
                            </div>
                        </article>
                    {% endfor %}
                </div>
            </div>
        </div>
    </div>
{% endblock %}
", "BrewingBundle:Page:index.html.twig", "/Users/scaule/MyProject/brew-manager/brew-front/src/BrewingBundle/Resources/views/Page/index.html.twig");
    }
}
