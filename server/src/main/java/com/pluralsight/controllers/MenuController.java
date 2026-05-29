package com.pluralsight.controllers;

import com.pluralsight.models.SpecialtyPizza;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MenuController {

    @GetMapping("/pizza/specialties")
    SpecialtyPizza[] getSpecialties() {
        return SpecialtyPizza.values();
    }


}
