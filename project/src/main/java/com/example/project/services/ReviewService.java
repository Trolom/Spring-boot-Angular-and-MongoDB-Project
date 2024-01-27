package com.example.project.services;

import com.example.project.entities.Review;
import com.example.project.repositories.ReviewRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ReviewService extends GenericService<Review, Integer> {

    private final ReviewRepository reviewRepository;

    @Autowired
    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
        super.setRepository(reviewRepository);
    }
}
