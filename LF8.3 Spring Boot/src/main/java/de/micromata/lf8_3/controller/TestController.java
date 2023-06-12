package de.micromata.lf8_3.controller;


import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

public class TestController {

  @GetMapping("")
  public String test(Model model) {
    return "home";
  }

}
