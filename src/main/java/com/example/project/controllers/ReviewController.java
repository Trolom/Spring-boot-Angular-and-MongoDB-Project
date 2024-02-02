package com.example.project.controllers;

import com.example.project.entities.Review;
import com.example.project.services.ReviewService;
import com.example.project.services.GenericService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/review")
public class ReviewController extends GenericController<Review, Integer> {

    private final ReviewService reviewService;

    @Autowired
    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @Override
    public GenericService<Review, Integer> getService() {
        return reviewService;
    }
}
