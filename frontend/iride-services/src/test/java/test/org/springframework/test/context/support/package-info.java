/*
 *  REST service to query for IRIDE roles using CSI-Piemonte IRIDE Service.
 *  Copyright (C) 2016  Regione Piemonte (www.regione.piemonte.it)
 *
 *  This program is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License along
 *  with this program; if not, write to the Free Software Foundation, Inc.,
 *  51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */
/**
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 *
 * Please see also, in order of importance, the following links for a deep tour about the topic of testing (and mocking) <a href="http://docs.spring.io/spring/docs/3.1.4.RELEASE/spring-framework-reference/html/mvc.html">Spring MVC</a>, with with Spring 3.1.x version:
 * <ul>
 *   <li><a href="http://stackoverflow.com/questions/35588023/mocking-autowiring-beans-with-spring-3-1-x-and-mockmvc">Mocking/autowiring beans with Spring 3.1.x and MockMvc</a></li>
 *   <li><a href="https://stevelibonati.wordpress.com/tag/spring-mvc-test/">Spring-Mvc-Test With A Sprinkle Of Mockito</a></li>
 *   <li><a href="https://github.com/spring-projects/spring-test-mvc">spring-projects/spring-test-mvc</a></li>
 *   <li><a href="https://www.petrikainulainen.net/programming/spring-framework/unit-testing-of-spring-mvc-controllers-configuration">Unit Testing of Spring MVC Controllers: Configuration</a></li>
 *   <li><a href="https://www.petrikainulainen.net/programming/spring-framework/unit-testing-of-spring-mvc-controllers-rest-api/">Unit Testing of Spring MVC Controllers: REST API</a></li>
 * </ul>
 */
package test.org.springframework.test.context.support;
