package org.example._20240923ordersysrestaurantmanager2.repositroy;

import org.example._20240923ordersysrestaurantmanager2.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
}