<?php

/* @Twig/Exception/exception_full.html.twig */
class __TwigTemplate_33bc112c755553306500e34f7620a1ad84d11b608f1a2a1a6921e836b0946a32 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("@Twig/layout.html.twig", "@Twig/Exception/exception_full.html.twig", 1);
        $this->blocks = array(
            'head' => array($this, 'block_head'),
            'title' => array($this, 'block_title'),
            'body' => array($this, 'block_body'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "@Twig/layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_b1f8611fa8c555b7593d7acd136212817e75a86b4a740b0363affb8452ee0668 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_b1f8611fa8c555b7593d7acd136212817e75a86b4a740b0363affb8452ee0668->enter($__internal_b1f8611fa8c555b7593d7acd136212817e75a86b4a740b0363affb8452ee0668_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@Twig/Exception/exception_full.html.twig"));

        $__internal_f1f78cfd9b6e4d3074960eb6c382b44a8e0096e2fcbcf8c1f7bd43edc047bad8 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_f1f78cfd9b6e4d3074960eb6c382b44a8e0096e2fcbcf8c1f7bd43edc047bad8->enter($__internal_f1f78cfd9b6e4d3074960eb6c382b44a8e0096e2fcbcf8c1f7bd43edc047bad8_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@Twig/Exception/exception_full.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_b1f8611fa8c555b7593d7acd136212817e75a86b4a740b0363affb8452ee0668->leave($__internal_b1f8611fa8c555b7593d7acd136212817e75a86b4a740b0363affb8452ee0668_prof);

        
        $__internal_f1f78cfd9b6e4d3074960eb6c382b44a8e0096e2fcbcf8c1f7bd43edc047bad8->leave($__internal_f1f78cfd9b6e4d3074960eb6c382b44a8e0096e2fcbcf8c1f7bd43edc047bad8_prof);

    }

    // line 3
    public function block_head($context, array $blocks = array())
    {
        $__internal_3c0c94bdb48bbef7fd972903ef60ad0f7fa2c88e421d1992e998fcbf3d302daf = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_3c0c94bdb48bbef7fd972903ef60ad0f7fa2c88e421d1992e998fcbf3d302daf->enter($__internal_3c0c94bdb48bbef7fd972903ef60ad0f7fa2c88e421d1992e998fcbf3d302daf_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

        $__internal_541c80cdfe052b47b3c0d0051112bc5754426cb77b69c7ad076ccc47c8a2f907 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_541c80cdfe052b47b3c0d0051112bc5754426cb77b69c7ad076ccc47c8a2f907->enter($__internal_541c80cdfe052b47b3c0d0051112bc5754426cb77b69c7ad076ccc47c8a2f907_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

        // line 4
        echo "    <style>
        .sf-reset .traces {
            padding-bottom: 14px;
        }
        .sf-reset .traces li {
            font-size: 12px;
            color: #868686;
            padding: 5px 4px;
            list-style-type: decimal;
            margin-left: 20px;
        }
        .sf-reset #logs .traces li.error {
            font-style: normal;
            color: #AA3333;
            background: #f9ecec;
        }
        .sf-reset #logs .traces li.warning {
            font-style: normal;
            background: #ffcc00;
        }
        /* fix for Opera not liking empty <li> */
        .sf-reset .traces li:after {
            content: \"\\00A0\";
        }
        .sf-reset .trace {
            border: 1px solid #D3D3D3;
            padding: 10px;
            overflow: auto;
            margin: 10px 0 20px;
        }
        .sf-reset .block-exception {
            -moz-border-radius: 16px;
            -webkit-border-radius: 16px;
            border-radius: 16px;
            margin-bottom: 20px;
            background-color: #f6f6f6;
            border: 1px solid #dfdfdf;
            padding: 30px 28px;
            word-wrap: break-word;
            overflow: hidden;
        }
        .sf-reset .block-exception div {
            color: #313131;
            font-size: 10px;
        }
        .sf-reset .block-exception-detected .illustration-exception,
        .sf-reset .block-exception-detected .text-exception {
            float: left;
        }
        .sf-reset .block-exception-detected .illustration-exception {
            width: 152px;
        }
        .sf-reset .block-exception-detected .text-exception {
            width: 670px;
            padding: 30px 44px 24px 46px;
            position: relative;
        }
        .sf-reset .text-exception .open-quote,
        .sf-reset .text-exception .close-quote {
            font-family: Arial, Helvetica, sans-serif;
            position: absolute;
            color: #C9C9C9;
            font-size: 8em;
        }
        .sf-reset .open-quote {
            top: 0;
            left: 0;
        }
        .sf-reset .close-quote {
            bottom: -0.5em;
            right: 50px;
        }
        .sf-reset .block-exception p {
            font-family: Arial, Helvetica, sans-serif;
        }
        .sf-reset .block-exception p a,
        .sf-reset .block-exception p a:hover {
            color: #565656;
        }
        .sf-reset .logs h2 {
            float: left;
            width: 654px;
        }
        .sf-reset .error-count, .sf-reset .support {
            float: right;
            width: 170px;
            text-align: right;
        }
        .sf-reset .error-count span {
             display: inline-block;
             background-color: #aacd4e;
             -moz-border-radius: 6px;
             -webkit-border-radius: 6px;
             border-radius: 6px;
             padding: 4px;
             color: white;
             margin-right: 2px;
             font-size: 11px;
             font-weight: bold;
        }

        .sf-reset .support a {
            display: inline-block;
            -moz-border-radius: 6px;
            -webkit-border-radius: 6px;
            border-radius: 6px;
            padding: 4px;
            color: #000000;
            margin-right: 2px;
            font-size: 11px;
            font-weight: bold;
        }

        .sf-reset .toggle {
            vertical-align: middle;
        }
        .sf-reset .linked ul,
        .sf-reset .linked li {
            display: inline;
        }
        .sf-reset #output-content {
            color: #000;
            font-size: 12px;
        }
        .sf-reset #traces-text pre {
            white-space: pre;
            font-size: 12px;
            font-family: monospace;
        }
    </style>
";
        
        $__internal_541c80cdfe052b47b3c0d0051112bc5754426cb77b69c7ad076ccc47c8a2f907->leave($__internal_541c80cdfe052b47b3c0d0051112bc5754426cb77b69c7ad076ccc47c8a2f907_prof);

        
        $__internal_3c0c94bdb48bbef7fd972903ef60ad0f7fa2c88e421d1992e998fcbf3d302daf->leave($__internal_3c0c94bdb48bbef7fd972903ef60ad0f7fa2c88e421d1992e998fcbf3d302daf_prof);

    }

    // line 136
    public function block_title($context, array $blocks = array())
    {
        $__internal_71c6101b5e07e25136de9d45f07a61cd7cfc584d2cb3d193dd721172f21b25e9 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_71c6101b5e07e25136de9d45f07a61cd7cfc584d2cb3d193dd721172f21b25e9->enter($__internal_71c6101b5e07e25136de9d45f07a61cd7cfc584d2cb3d193dd721172f21b25e9_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        $__internal_345a5ce0e8aa4762551a8c1d6c31d43576e531bebe4e6bd6b1d6f5268e51d4c6 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_345a5ce0e8aa4762551a8c1d6c31d43576e531bebe4e6bd6b1d6f5268e51d4c6->enter($__internal_345a5ce0e8aa4762551a8c1d6c31d43576e531bebe4e6bd6b1d6f5268e51d4c6_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        // line 137
        echo "    ";
        echo twig_escape_filter($this->env, $this->getAttribute(($context["exception"] ?? $this->getContext($context, "exception")), "message", array()), "html", null, true);
        echo " (";
        echo twig_escape_filter($this->env, ($context["status_code"] ?? $this->getContext($context, "status_code")), "html", null, true);
        echo " ";
        echo twig_escape_filter($this->env, ($context["status_text"] ?? $this->getContext($context, "status_text")), "html", null, true);
        echo ")
";
        
        $__internal_345a5ce0e8aa4762551a8c1d6c31d43576e531bebe4e6bd6b1d6f5268e51d4c6->leave($__internal_345a5ce0e8aa4762551a8c1d6c31d43576e531bebe4e6bd6b1d6f5268e51d4c6_prof);

        
        $__internal_71c6101b5e07e25136de9d45f07a61cd7cfc584d2cb3d193dd721172f21b25e9->leave($__internal_71c6101b5e07e25136de9d45f07a61cd7cfc584d2cb3d193dd721172f21b25e9_prof);

    }

    // line 140
    public function block_body($context, array $blocks = array())
    {
        $__internal_c2efa1d385d38d9c891e8e6d89f8512f0aea6f0af77b662fa9b5a99ed565e76d = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_c2efa1d385d38d9c891e8e6d89f8512f0aea6f0af77b662fa9b5a99ed565e76d->enter($__internal_c2efa1d385d38d9c891e8e6d89f8512f0aea6f0af77b662fa9b5a99ed565e76d_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        $__internal_4f6eb0ba0004c3d9d29b59f0349f7aa675443888a3aedd7d28a0b6cdd55d9d51 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_4f6eb0ba0004c3d9d29b59f0349f7aa675443888a3aedd7d28a0b6cdd55d9d51->enter($__internal_4f6eb0ba0004c3d9d29b59f0349f7aa675443888a3aedd7d28a0b6cdd55d9d51_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        // line 141
        echo "    ";
        $this->loadTemplate("@Twig/Exception/exception.html.twig", "@Twig/Exception/exception_full.html.twig", 141)->display($context);
        
        $__internal_4f6eb0ba0004c3d9d29b59f0349f7aa675443888a3aedd7d28a0b6cdd55d9d51->leave($__internal_4f6eb0ba0004c3d9d29b59f0349f7aa675443888a3aedd7d28a0b6cdd55d9d51_prof);

        
        $__internal_c2efa1d385d38d9c891e8e6d89f8512f0aea6f0af77b662fa9b5a99ed565e76d->leave($__internal_c2efa1d385d38d9c891e8e6d89f8512f0aea6f0af77b662fa9b5a99ed565e76d_prof);

    }

    public function getTemplateName()
    {
        return "@Twig/Exception/exception_full.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  226 => 141,  217 => 140,  200 => 137,  191 => 136,  51 => 4,  42 => 3,  11 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% extends '@Twig/layout.html.twig' %}

{% block head %}
    <style>
        .sf-reset .traces {
            padding-bottom: 14px;
        }
        .sf-reset .traces li {
            font-size: 12px;
            color: #868686;
            padding: 5px 4px;
            list-style-type: decimal;
            margin-left: 20px;
        }
        .sf-reset #logs .traces li.error {
            font-style: normal;
            color: #AA3333;
            background: #f9ecec;
        }
        .sf-reset #logs .traces li.warning {
            font-style: normal;
            background: #ffcc00;
        }
        /* fix for Opera not liking empty <li> */
        .sf-reset .traces li:after {
            content: \"\\00A0\";
        }
        .sf-reset .trace {
            border: 1px solid #D3D3D3;
            padding: 10px;
            overflow: auto;
            margin: 10px 0 20px;
        }
        .sf-reset .block-exception {
            -moz-border-radius: 16px;
            -webkit-border-radius: 16px;
            border-radius: 16px;
            margin-bottom: 20px;
            background-color: #f6f6f6;
            border: 1px solid #dfdfdf;
            padding: 30px 28px;
            word-wrap: break-word;
            overflow: hidden;
        }
        .sf-reset .block-exception div {
            color: #313131;
            font-size: 10px;
        }
        .sf-reset .block-exception-detected .illustration-exception,
        .sf-reset .block-exception-detected .text-exception {
            float: left;
        }
        .sf-reset .block-exception-detected .illustration-exception {
            width: 152px;
        }
        .sf-reset .block-exception-detected .text-exception {
            width: 670px;
            padding: 30px 44px 24px 46px;
            position: relative;
        }
        .sf-reset .text-exception .open-quote,
        .sf-reset .text-exception .close-quote {
            font-family: Arial, Helvetica, sans-serif;
            position: absolute;
            color: #C9C9C9;
            font-size: 8em;
        }
        .sf-reset .open-quote {
            top: 0;
            left: 0;
        }
        .sf-reset .close-quote {
            bottom: -0.5em;
            right: 50px;
        }
        .sf-reset .block-exception p {
            font-family: Arial, Helvetica, sans-serif;
        }
        .sf-reset .block-exception p a,
        .sf-reset .block-exception p a:hover {
            color: #565656;
        }
        .sf-reset .logs h2 {
            float: left;
            width: 654px;
        }
        .sf-reset .error-count, .sf-reset .support {
            float: right;
            width: 170px;
            text-align: right;
        }
        .sf-reset .error-count span {
             display: inline-block;
             background-color: #aacd4e;
             -moz-border-radius: 6px;
             -webkit-border-radius: 6px;
             border-radius: 6px;
             padding: 4px;
             color: white;
             margin-right: 2px;
             font-size: 11px;
             font-weight: bold;
        }

        .sf-reset .support a {
            display: inline-block;
            -moz-border-radius: 6px;
            -webkit-border-radius: 6px;
            border-radius: 6px;
            padding: 4px;
            color: #000000;
            margin-right: 2px;
            font-size: 11px;
            font-weight: bold;
        }

        .sf-reset .toggle {
            vertical-align: middle;
        }
        .sf-reset .linked ul,
        .sf-reset .linked li {
            display: inline;
        }
        .sf-reset #output-content {
            color: #000;
            font-size: 12px;
        }
        .sf-reset #traces-text pre {
            white-space: pre;
            font-size: 12px;
            font-family: monospace;
        }
    </style>
{% endblock %}

{% block title %}
    {{ exception.message }} ({{ status_code }} {{ status_text }})
{% endblock %}

{% block body %}
    {% include '@Twig/Exception/exception.html.twig' %}
{% endblock %}
", "@Twig/Exception/exception_full.html.twig", "/Users/scaule/MyProject/brew-manager/brew-front/vendor/symfony/symfony/src/Symfony/Bundle/TwigBundle/Resources/views/Exception/exception_full.html.twig");
    }
}
