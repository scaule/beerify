<?php

/* GuzzleBundle::profiler.html.twig */
class __TwigTemplate_88d958401f0ed01fd4dadb0a820eca6844e2790bc73c91df947427f4de008f5e extends Twig_Template
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
        $__internal_973e487fe805d7a295586f474cad017f68434ace75024ac2c5e46fe1df73b6d3 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_973e487fe805d7a295586f474cad017f68434ace75024ac2c5e46fe1df73b6d3->enter($__internal_973e487fe805d7a295586f474cad017f68434ace75024ac2c5e46fe1df73b6d3_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "GuzzleBundle::profiler.html.twig"));

        $__internal_87e10371139a039eb3ec0627caea00374bf27b3ab08c7a18cc90c65b6d8b93e4 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_87e10371139a039eb3ec0627caea00374bf27b3ab08c7a18cc90c65b6d8b93e4->enter($__internal_87e10371139a039eb3ec0627caea00374bf27b3ab08c7a18cc90c65b6d8b93e4_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "GuzzleBundle::profiler.html.twig"));

        // line 1
        if ( !$this->getAttribute(($context["collector"] ?? $this->getContext($context, "collector")), "logs", array())) {
            // line 2
            echo "    <p>
        <em>No calls</em>
    </p>
";
        } else {
            // line 6
            echo "
    <div id=\"guzzle_profiler\">

        ";
            // line 9
            $context["firstRequest"] = false;
            // line 10
            echo "
        ";
            // line 11
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["collector"] ?? $this->getContext($context, "collector")), "logs", array()));
            foreach ($context['_seq'] as $context["_key"] => $context["group"]) {
                // line 12
                echo "
            <h2>Group ";
                // line 13
                echo twig_escape_filter($this->env, $this->getAttribute($context["group"], "requestName", array()), "html", null, true);
                echo "</h2>

        ";
                // line 15
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute($context["group"], "messages", array()));
                $context['_iterated'] = false;
                foreach ($context['_seq'] as $context["i"] => $context["message"]) {
                    // line 16
                    echo "
            <div id=\"request_";
                    // line 17
                    echo twig_escape_filter($this->env, $context["i"], "html", null, true);
                    echo "\" class=\"request method_";
                    echo twig_escape_filter($this->env, twig_lower_filter($this->env, $this->getAttribute($this->getAttribute($context["message"], "request", array()), "method", array())), "html", null, true);
                    echo "\">
                <h3>
                    <a href=\"javascript:;\">
                        <span class=\"method\">";
                    // line 20
                    echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($context["message"], "request", array()), "method", array()), "html", null, true);
                    echo "</span>
                        <span class=\"url\">";
                    // line 21
                    echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($context["message"], "request", array()), "url", array()), "html", null, true);
                    echo "</span>
                        <span class=\"response\">
                            ";
                    // line 23
                    if ($this->getAttribute($context["message"], "response", array())) {
                        // line 24
                        echo "                                ";
                        echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($context["message"], "response", array()), "statusPhrase", array()), "html", null, true);
                        echo " (";
                        echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($context["message"], "response", array()), "statusCode", array()), "html", null, true);
                        echo ")
                            ";
                    } else {
                        // line 26
                        echo "                                N/A
                            ";
                    }
                    // line 28
                    echo "                        </span>
                    </a>
                </h3>
                <div class=\"content\" ";
                    // line 31
                    echo ((($context["firstRequest"] ?? $this->getContext($context, "firstRequest"))) ? ("style=\"display: none;\"") : (""));
                    echo ">
                    <h4>Basic</h4>
                    <table>
                        <tr>
                            <th>Log Level</th>
                            <td>";
                    // line 36
                    echo twig_escape_filter($this->env, $this->getAttribute($context["message"], "level", array()), "html", null, true);
                    echo "</td>
                        </tr>
                        <tr>
                            <th>Message</th>
                            <td>";
                    // line 40
                    echo twig_escape_filter($this->env, $this->getAttribute($context["message"], "message", array()), "html", null, true);
                    echo "</td>
                        </tr>
                    </table>

                    <div>
                        <h4>Request</h4>

                        <table>
                            <tr>
                                <th>Protocol Version</th>
                                <td>";
                    // line 50
                    echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($context["message"], "request", array()), "protocolVersion", array()), "html", null, true);
                    echo "</td>
                            </tr>
                            <tr>
                                <th>Headers</th>
                                <td>";
                    // line 54
                    echo $this->env->getExtension('Symfony\Bridge\Twig\Extension\DumpExtension')->dump($this->env, $context, $this->getAttribute($this->getAttribute($context["message"], "request", array()), "headers", array()));
                    echo "</td>
                            </tr>
                            <tr>
                                <th>Body</th>
                                <td>
                                    <textarea readonly id=\"requestBody\">";
                    // line 59
                    echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($context["message"], "request", array()), "body", array()), "html", null, true);
                    echo "</textarea>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div>
                        <h4>Response</h4>

                        ";
                    // line 68
                    if ($this->getAttribute($context["message"], "response", array())) {
                        // line 69
                        echo "                            <table>
                                <tr>
                                    <th>Protocol Version</th>
                                    <td>";
                        // line 72
                        echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($context["message"], "response", array()), "protocolVersion", array()), "html", null, true);
                        echo "</td>
                                </tr>
                                <tr>
                                    <th>Headers</th>
                                    <td>";
                        // line 76
                        echo $this->env->getExtension('Symfony\Bridge\Twig\Extension\DumpExtension')->dump($this->env, $context, $this->getAttribute($this->getAttribute($context["message"], "response", array()), "headers", array()));
                        echo "</td>
                                </tr>
                                <tr>
                                    <th>Body</th>
                                    <td>
                                        <textarea readonly id=\"responseBody\">";
                        // line 81
                        echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($context["message"], "response", array()), "body", array()), "html", null, true);
                        echo "</textarea>
                                    </td>
                                </tr>
                            </table>
                        ";
                    } else {
                        // line 86
                        echo "                            No response available.
                        ";
                    }
                    // line 88
                    echo "                    </div>
                </div>
            </div>

            <script>
                \$(\"#request_";
                    // line 93
                    echo twig_escape_filter($this->env, $context["i"], "html", null, true);
                    echo " h3 a\").click(function () {
                    \$(\"#request_";
                    // line 94
                    echo twig_escape_filter($this->env, $context["i"], "html", null, true);
                    echo " .content\").toggle(\"fast\");
                });

                var requestBody = \$('#requestBody');
                requestBody.val(formatJson(requestBody.val()));

                var responseBody = \$('#responseBody');
                responseBody.val(formatJson(responseBody.val()));

                function formatJson(json) {
                    if (json) {
                        try{
                            return JSON.stringify(JSON.parse(json), null, 2);
                        }catch(error){
                            //different formats json ex: xml
                        }
                    }
                }
            </script>

            ";
                    // line 114
                    $context["firstRequest"] = true;
                    // line 115
                    echo "            ";
                    $context['_iterated'] = true;
                }
                if (!$context['_iterated']) {
                    // line 116
                    echo "
            <p>No Calls</p>
        ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['i'], $context['message'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 119
                echo "        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['group'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 120
            echo "
    </div>

";
        }
        
        $__internal_973e487fe805d7a295586f474cad017f68434ace75024ac2c5e46fe1df73b6d3->leave($__internal_973e487fe805d7a295586f474cad017f68434ace75024ac2c5e46fe1df73b6d3_prof);

        
        $__internal_87e10371139a039eb3ec0627caea00374bf27b3ab08c7a18cc90c65b6d8b93e4->leave($__internal_87e10371139a039eb3ec0627caea00374bf27b3ab08c7a18cc90c65b6d8b93e4_prof);

    }

    public function getTemplateName()
    {
        return "GuzzleBundle::profiler.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  243 => 120,  237 => 119,  229 => 116,  224 => 115,  222 => 114,  199 => 94,  195 => 93,  188 => 88,  184 => 86,  176 => 81,  168 => 76,  161 => 72,  156 => 69,  154 => 68,  142 => 59,  134 => 54,  127 => 50,  114 => 40,  107 => 36,  99 => 31,  94 => 28,  90 => 26,  82 => 24,  80 => 23,  75 => 21,  71 => 20,  63 => 17,  60 => 16,  55 => 15,  50 => 13,  47 => 12,  43 => 11,  40 => 10,  38 => 9,  33 => 6,  27 => 2,  25 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% if not collector.logs %}
    <p>
        <em>No calls</em>
    </p>
{% else %}

    <div id=\"guzzle_profiler\">

        {% set firstRequest = false %}

        {% for group in collector.logs %}

            <h2>Group {{ group.requestName }}</h2>

        {% for i, message in group.messages %}

            <div id=\"request_{{ i }}\" class=\"request method_{{ message.request.method | lower }}\">
                <h3>
                    <a href=\"javascript:;\">
                        <span class=\"method\">{{ message.request.method }}</span>
                        <span class=\"url\">{{ message.request.url }}</span>
                        <span class=\"response\">
                            {% if message.response %}
                                {{ message.response.statusPhrase }} ({{ message.response.statusCode }})
                            {% else %}
                                N/A
                            {% endif %}
                        </span>
                    </a>
                </h3>
                <div class=\"content\" {{ firstRequest ? 'style=\"display: none;\"': '' }}>
                    <h4>Basic</h4>
                    <table>
                        <tr>
                            <th>Log Level</th>
                            <td>{{ message.level }}</td>
                        </tr>
                        <tr>
                            <th>Message</th>
                            <td>{{ message.message }}</td>
                        </tr>
                    </table>

                    <div>
                        <h4>Request</h4>

                        <table>
                            <tr>
                                <th>Protocol Version</th>
                                <td>{{ message.request.protocolVersion }}</td>
                            </tr>
                            <tr>
                                <th>Headers</th>
                                <td>{{ dump(message.request.headers) }}</td>
                            </tr>
                            <tr>
                                <th>Body</th>
                                <td>
                                    <textarea readonly id=\"requestBody\">{{ message.request.body }}</textarea>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div>
                        <h4>Response</h4>

                        {% if message.response %}
                            <table>
                                <tr>
                                    <th>Protocol Version</th>
                                    <td>{{ message.response.protocolVersion }}</td>
                                </tr>
                                <tr>
                                    <th>Headers</th>
                                    <td>{{ dump(message.response.headers) }}</td>
                                </tr>
                                <tr>
                                    <th>Body</th>
                                    <td>
                                        <textarea readonly id=\"responseBody\">{{ message.response.body }}</textarea>
                                    </td>
                                </tr>
                            </table>
                        {% else %}
                            No response available.
                        {% endif %}
                    </div>
                </div>
            </div>

            <script>
                \$(\"#request_{{ i }} h3 a\").click(function () {
                    \$(\"#request_{{ i }} .content\").toggle(\"fast\");
                });

                var requestBody = \$('#requestBody');
                requestBody.val(formatJson(requestBody.val()));

                var responseBody = \$('#responseBody');
                responseBody.val(formatJson(responseBody.val()));

                function formatJson(json) {
                    if (json) {
                        try{
                            return JSON.stringify(JSON.parse(json), null, 2);
                        }catch(error){
                            //different formats json ex: xml
                        }
                    }
                }
            </script>

            {% set firstRequest = true %}
            {% else %}

            <p>No Calls</p>
        {% endfor %}
        {% endfor %}

    </div>

{% endif %}
", "GuzzleBundle::profiler.html.twig", "/Users/scaule/MyProject/brew-manager/brew-front/vendor/eightpoints/guzzle-bundle/EightPoints/Bundle/GuzzleBundle/Resources/views/profiler.html.twig");
    }
}
